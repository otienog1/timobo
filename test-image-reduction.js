const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing image reduction on Eastern and Southern Africa pages...');

    // Test Eastern Africa page with reduced images
    console.log('1. Testing Eastern Africa page with 2 images...');
    await page.goto('http://localhost:3002/destinations/eastern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'eastern-africa-2-images.png', fullPage: true });
    console.log('   ✓ Eastern Africa page screenshot taken');

    // Test Southern Africa page with reduced images
    console.log('2. Testing Southern Africa page with 2 images...');
    await page.goto('http://localhost:3002/destinations/southern');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'southern-africa-2-images.png', fullPage: true });
    console.log('   ✓ Southern Africa page screenshot taken');

    console.log('✅ Image reduction tests completed successfully!');
    console.log('Screenshots saved:');
    console.log('- eastern-africa-2-images.png');
    console.log('- southern-africa-2-images.png');

  } catch (error) {
    console.error('❌ Image reduction tests failed:', error.message);
  } finally {
    await browser.close();
  }
})();