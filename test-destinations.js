const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Navigate to destinations page
    console.log('Navigating to destinations page...');
    await page.goto('http://localhost:3002/destinations');
    await page.waitForLoadState('networkidle');

    // Take desktop screenshot
    console.log('Taking desktop screenshot...');
    await page.screenshot({ path: 'destinations-desktop.png', fullPage: true });

    // Test filter buttons
    console.log('Testing Eastern Africa filter...');
    await page.click('button:has-text("Eastern Africa")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'destinations-eastern-filter.png', fullPage: true });

    console.log('Testing Southern Africa filter...');
    await page.click('button:has-text("Southern Africa")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'destinations-southern-filter.png', fullPage: true });

    console.log('Testing All Destinations filter...');
    await page.click('button:has-text("All Destinations")');
    await page.waitForTimeout(1000);

    // Test mobile view
    console.log('Testing mobile view...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'destinations-mobile.png', fullPage: true });

    // Test tablet view
    console.log('Testing tablet view...');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'destinations-tablet.png', fullPage: true });

    // Test hover effects (desktop view)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);

    console.log('Testing hover effects...');
    const firstDestination = await page.locator('.group').first();
    await firstDestination.hover();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'destinations-hover.png', fullPage: true });

    console.log('✅ All tests completed successfully!');
    console.log('Screenshots saved:');
    console.log('- destinations-desktop.png');
    console.log('- destinations-eastern-filter.png');
    console.log('- destinations-southern-filter.png');
    console.log('- destinations-mobile.png');
    console.log('- destinations-tablet.png');
    console.log('- destinations-hover.png');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();