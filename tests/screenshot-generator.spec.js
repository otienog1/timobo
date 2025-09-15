const { test } = require('@playwright/test');
const fs = require('fs');

const viewports = [
  { name: 'mobile-small', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop-small', width: 1024, height: 768 },
  { name: 'desktop-large', width: 1440, height: 900 },
];

test('Generate Screenshots', async ({ page }) => {
  // Ensure screenshots directory exists
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots', { recursive: true });
  }

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });

    // Wait a bit more for any animations
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: `screenshots/${viewport.name}-full-page.png`,
      fullPage: true
    });

    console.log(`✅ Screenshot captured: ${viewport.name} (${viewport.width}x${viewport.height})`);
  }
});