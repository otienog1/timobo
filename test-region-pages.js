const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing Eastern and Southern Africa pages...');

    // Test Eastern Africa page
    console.log('1. Testing Eastern Africa page...');
    await page.goto('http://localhost:3002/destinations/eastern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'eastern-africa-redesigned.png', fullPage: true });
    console.log('   ✓ Eastern Africa page loaded and screenshot taken');

    // Test Southern Africa page
    console.log('2. Testing Southern Africa page...');
    await page.goto('http://localhost:3002/destinations/southern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'southern-africa-redesigned.png', fullPage: true });
    console.log('   ✓ Southern Africa page loaded and screenshot taken');

    // Test mobile views
    console.log('3. Testing mobile view - Eastern Africa...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3002/destinations/eastern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'eastern-africa-mobile.png', fullPage: true });

    console.log('4. Testing mobile view - Southern Africa...');
    await page.goto('http://localhost:3002/destinations/southern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'southern-africa-mobile.png', fullPage: true });

    console.log('✅ All region page tests completed successfully!');
    console.log('Screenshots saved:');
    console.log('- eastern-africa-redesigned.png');
    console.log('- southern-africa-redesigned.png');
    console.log('- eastern-africa-mobile.png');
    console.log('- southern-africa-mobile.png');

  } catch (error) {
    console.error('❌ Region page tests failed:', error.message);
  } finally {
    await browser.close();
  }
})();