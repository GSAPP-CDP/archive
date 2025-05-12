const { test, expect } = require('@playwright/test');

test('example test case', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your application's URL
    const title = await page.title();
    expect(title).toBe('Expected Title'); // Replace with the expected title of your page
    const element = await page.locator('selector'); // Replace with the selector of the element you want to check
    await expect(element).toBeVisible();
});