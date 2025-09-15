const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing navbar dropdowns...');
    await page.goto('http://localhost:3002/destinations');
    await page.waitForLoadState('networkidle');

    // Test Destinations dropdown
    console.log('Testing Destinations dropdown...');
    await page.hover('button:has-text("Destinations")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'navbar-destinations-dropdown.png', fullPage: true });

    // Test Services dropdown
    console.log('Testing Services dropdown...');
    await page.hover('button:has-text("Services")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'navbar-services-dropdown.png', fullPage: true });

    console.log('✅ Navbar dropdown tests completed!');
    console.log('Screenshots saved:');
    console.log('- navbar-destinations-dropdown.png');
    console.log('- navbar-services-dropdown.png');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();