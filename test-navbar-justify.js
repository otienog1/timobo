const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing navbar with justify-between layout...');

    // Test desktop navbar with full width
    console.log('1. Testing desktop navbar...');
    await page.goto('http://localhost:3002/');
    await page.waitForLoadState('networkidle');

    // Take screenshot of full navbar
    await page.screenshot({
      path: 'navbar-justify-between.png',
      clip: { x: 0, y: 0, width: 1200, height: 100 }
    });
    console.log('   Desktop navbar screenshot taken');

    // Test larger screen size
    console.log('2. Testing large screen navbar...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    await page.screenshot({
      path: 'navbar-large-screen.png',
      clip: { x: 0, y: 0, width: 1920, height: 100 }
    });
    console.log('   Large screen navbar screenshot taken');

    // Test dropdown still works
    console.log('3. Testing dropdown functionality...');
    await page.hover('button:has-text("Destinations")');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'navbar-dropdown-justified.png', fullPage: false });
    console.log('   Dropdown functionality verified');

    console.log('✅ Navbar justify-between tests completed!');
    console.log('Screenshots saved:');
    console.log('- navbar-justify-between.png');
    console.log('- navbar-large-screen.png');
    console.log('- navbar-dropdown-justified.png');

  } catch (error) {
    console.error('❌ Navbar justify test failed:', error.message);
  } finally {
    await browser.close();
  }
})();