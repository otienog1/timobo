const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing fixed navbar...');

    // Test desktop navbar
    console.log('1. Testing desktop navbar...');
    await page.goto('http://localhost:3002/');
    await page.waitForLoadState('networkidle');

    // Check if Inquire Now button is gone
    const inquireButtons = await page.locator('text=INQUIRE NOW').count();
    console.log(`   Found ${inquireButtons} "INQUIRE NOW" buttons (should be 0)`);

    // Take screenshot of navbar area
    await page.screenshot({
      path: 'navbar-fixed-desktop.png',
      clip: { x: 0, y: 0, width: 1200, height: 100 }
    });
    console.log('   Desktop navbar screenshot taken');

    // Test mobile navbar
    console.log('2. Testing mobile navbar...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Take mobile screenshot
    await page.screenshot({
      path: 'navbar-fixed-mobile.png',
      clip: { x: 0, y: 0, width: 375, height: 100 }
    });
    console.log('   Mobile navbar screenshot taken');

    // Test dropdown functionality
    console.log('3. Testing dropdown functionality...');
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Test destinations dropdown
    await page.hover('button:has-text("Destinations")');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'navbar-dropdown-test.png', fullPage: false });
    console.log('   Dropdown functionality tested');

    if (inquireButtons === 0) {
      console.log('✅ INQUIRE NOW button successfully removed!');
    } else {
      console.log('❌ INQUIRE NOW button still present');
    }

    console.log('✅ Navbar tests completed!');
    console.log('Screenshots saved:');
    console.log('- navbar-fixed-desktop.png');
    console.log('- navbar-fixed-mobile.png');
    console.log('- navbar-dropdown-test.png');

  } catch (error) {
    console.error('❌ Navbar test failed:', error.message);
  } finally {
    await browser.close();
  }
})();