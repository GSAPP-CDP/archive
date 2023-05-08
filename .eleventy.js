const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownImplicitFigures = require("markdown-it-implicit-figures");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // configure markdown library to use custom plugins
  const markdownLib = markdownIt({
    html: true,
    linkify: true,
  })
    .use(markdownItFootnote) // add footnote plugin
    .use(markdownImplicitFigures, { figcaption: true }); // add implicit figures
  eleventyConfig.setLibrary("md", markdownLib);

  // copy assets from public/ directory to root of site build
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // add base plugin to allow deployment to GitHub Pages subfolder
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // add collection of project pages from projects/ directory
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return (
      collectionApi
        .getFilteredByGlob(["projects/*.md"])
        // sort by year (descending), then title (ascending)
        .sort(
          (a, b) =>
            b.data.year - a.data.year ||
            a.data.title.localeCompare(b.data.title)
        )
    );
  });

  // add filter to normalize links to array of objects with url and text properties
  eleventyConfig.addFilter("normalizeLinks", function (links) {
    if (typeof links === "undefined") return;
    if (!Array.isArray(links)) {
      throw new Error(
        "links must be an array of urls or objects with url and text properties"
      );
    }
    return links.map((link) => {
      if (typeof link === "string") {
        return { url: link, text: link };
      }
      if (typeof link === "object") {
        if (typeof link.url === "undefined") {
          throw new Error("link object must have url property");
        }
        if (typeof link.text === "undefined") {
          throw new Error("link object must have text property");
        }
        return link;
      }
      throw new Error("link must be a string or object");
    });
  });
};
