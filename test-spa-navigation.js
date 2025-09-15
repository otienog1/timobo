const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing SPA navigation...');

    // Start at home page
    console.log('1. Loading home page...');
    await page.goto('http://localhost:3002/');
    await page.waitForLoadState('networkidle');

    // Test main navigation links
    console.log('2. Testing Destinations navigation...');
    await page.click('a[href="/destinations"]');
    await page.waitForLoadState('networkidle');
    console.log('   ✓ Destinations page loaded');

    console.log('3. Testing dropdown navigation - Eastern Africa...');
    await page.hover('button:has-text("Destinations")');
    await page.waitForTimeout(500);
    await page.click('a[href="/destinations/eastern"]');
    await page.waitForLoadState('networkidle');
    console.log('   ✓ Eastern Africa page should load');

    console.log('4. Testing Services navigation...');
    await page.hover('button:has-text("Services")');
    await page.waitForTimeout(500);
    await page.click('a[href="/services/safari-experiences"]');
    await page.waitForLoadState('networkidle');
    console.log('   ✓ Safari Experiences page should load');

    console.log('5. Testing About navigation...');
    await page.click('a[href="/about"]');
    await page.waitForLoadState('networkidle');
    console.log('   ✓ About page loaded');

    console.log('6. Testing Contact navigation...');
    await page.click('a[href="/contact"]');
    await page.waitForLoadState('networkidle');
    console.log('   ✓ Contact page loaded');

    // Check current URL
    const finalUrl = page.url();
    console.log(`Final URL: ${finalUrl}`);

    // Take final screenshot
    await page.screenshot({ path: 'spa-navigation-test.png', fullPage: true });
    console.log('✅ SPA navigation test completed successfully!');

  } catch (error) {
    console.error('❌ SPA navigation test failed:', error.message);
  } finally {
    await browser.close();
  }
})();