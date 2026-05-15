// Run: node record-walkthrough.js [--year=2026] [--loop]
// Make sure the dev server is running first: npm start
// Then start your screen recorder (QuickTime Cmd+Shift+5) and run this script.

const { chromium } = require("playwright");
const { execSync } = require("child_process");

const BASE_URL = "http://localhost:8080";
const SCROLL_DURATION_MS = 5000;
const SCROLL_STEP_INTERVAL_MS = 50;

const args = process.argv.slice(2);
const yearArg = args.find(a => a.startsWith("--year="));
const targetYear = yearArg ? yearArg.split("=")[1] : "all";
const loop = args.includes("--loop");

async function smoothScroll(page) {
  await page.evaluate(async ({ duration, interval }) => {
    await new Promise((resolve) => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return resolve();
      const steps = duration / interval;
      const stepSize = totalHeight / steps;
      let scrolled = 0;
      const timer = setInterval(() => {
        scrolled += stepSize;
        window.scrollTo(0, Math.min(scrolled, totalHeight));
        if (scrolled >= totalHeight) {
          clearInterval(timer);
          resolve();
        }
      }, interval);
    });
  }, { duration: SCROLL_DURATION_MS, interval: SCROLL_STEP_INTERVAL_MS });
}

async function scrollToCard(page, cardIndex) {
  await page.evaluate((idx) => {
    const el = document.querySelectorAll(".projects-grid .project-card")[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - 80), behavior: "smooth" });
  }, cardIndex);
  await page.waitForTimeout(800);
}

async function gotoWithRetry(page, url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      return;
    } catch (err) {
      if (attempt === retries) throw err;
      await page.waitForTimeout(500 * attempt);
    }
  }
}

async function main() {
  const screenBounds = execSync(`osascript -e 'tell application "Finder" to get bounds of window of desktop'`).toString().trim();
  const [, , screenW, screenH] = screenBounds.split(", ").map(Number);
  const winX = Math.floor((screenW - 1920) / 2);
  const winY = Math.floor((screenH - 1080) / 2);

  const context = await chromium.launchPersistentContext("", {
    headless: false,
    args: [
      `--app=${BASE_URL}`,
      `--window-position=${winX},${winY}`,
      "--window-size=1920,960",
    ],
    viewport: { width: 1920, height: 960 },
  });
  const page = context.pages()[0] || await context.newPage();

  // --- Open index, hang for 3 seconds ---
  await gotoWithRetry(page, BASE_URL);
  await page.waitForTimeout(3000);

  // --- Collect project links, filtered by year or all ---
  const projectLinks = await page.evaluate((year) => {
    const allCards = Array.from(document.querySelectorAll(".projects-grid .project-card"));
    if (year === "all") {
      return allCards.map((card, idx) => ({
        href: card.querySelector("a.fade")?.href,
        cardIndex: idx,
      })).filter(p => p.href);
    }
    const header = Array.from(document.querySelectorAll(".projects-year-header"))
      .find(h => h.textContent.trim() === year);
    if (!header) return [];
    const grid = header.nextElementSibling;
    if (!grid) return [];
    return Array.from(grid.querySelectorAll(".project-card")).map(card => ({
      href: card.querySelector("a.fade")?.href,
      cardIndex: allCards.indexOf(card),
    })).filter(p => p.href);
  }, targetYear);

  console.log(`Found ${projectLinks.length} projects (year: ${targetYear}).${loop ? " Looping until stopped (Ctrl+C)." : ""}`);

  let pass = 0;
  do {
    if (loop) console.log(`--- Loop pass ${++pass} ---`);
    for (let i = 0; i < projectLinks.length; i++) {
      const { href, cardIndex } = projectLinks[i];
      console.log(`[${i + 1}/${projectLinks.length}] Visiting ${href}`);

      await gotoWithRetry(page, href);
      await page.waitForTimeout(500);
      await smoothScroll(page);

      await gotoWithRetry(page, BASE_URL);
      await page.waitForTimeout(400);
      await scrollToCard(page, cardIndex);
      await page.waitForTimeout(1000);
    }
  } while (loop);

  console.log("Done. Closing browser.");
  await context.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
