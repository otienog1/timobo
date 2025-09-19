const { test, expect } = require('@playwright/test');

test.describe('Basic Mobile Navigation Test', () => {
  test('Mobile navigation opens and shows menu items', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3005');

    // Find the mobile menu button
    const mobileMenuButton = page.locator('button:has(svg)').first();
    await expect(mobileMenuButton).toBeVisible();

    // Click to open mobile navigation
    await mobileMenuButton.click();

    // Wait for sheet to open
    await page.waitForTimeout(1000);

    // Check if navigation items are visible
    const homeLink = page.locator('text=Home').first();
    await expect(homeLink).toBeVisible();

    const destinationsLink = page.locator('text=Destinations').first();
    await expect(destinationsLink).toBeVisible();

    const servicesLink = page.locator('text=Services').first();
    await expect(servicesLink).toBeVisible();

    console.log('✅ Basic mobile navigation test passed');
  });
});