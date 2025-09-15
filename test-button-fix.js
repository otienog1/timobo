const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing button fixes on Eastern and Southern Africa pages...');

    // Test Eastern Africa page buttons
    console.log('1. Testing Eastern Africa page buttons...');
    await page.goto('http://localhost:3002/destinations/eastern');
    await page.waitForLoadState('networkidle');

    // Check for quote button
    const quoteButton = await page.locator('text=Get Your Eastern Africa Quote').count();
    console.log(`   Found ${quoteButton} "Get Your Eastern Africa Quote" buttons`);

    // Check for southern africa link
    const southernLink = await page.locator('text=Explore Southern Africa').count();
    console.log(`   Found ${southernLink} "Explore Southern Africa" buttons`);

    await page.screenshot({ path: 'eastern-africa-fixed-buttons.png', fullPage: true });

    // Test Southern Africa page buttons
    console.log('2. Testing Southern Africa page buttons...');
    await page.goto('http://localhost:3002/destinations/southern');
    await page.waitForLoadState('networkidle');

    // Check for quote button
    const southernQuoteButton = await page.locator('text=Get Your Southern Africa Quote').count();
    console.log(`   Found ${southernQuoteButton} "Get Your Southern Africa Quote" buttons`);

    // Check for eastern africa link
    const easternLink = await page.locator('text=Discover Eastern Africa').count();
    console.log(`   Found ${easternLink} "Discover Eastern Africa" buttons`);

    await page.screenshot({ path: 'southern-africa-fixed-buttons.png', fullPage: true });

    // Test button functionality - click quote button
    console.log('3. Testing button functionality...');
    await page.click('text=Get Your Southern Africa Quote');
    await page.waitForLoadState('networkidle');

    const currentUrl = page.url();
    console.log(`   Clicked quote button, current URL: ${currentUrl}`);

    if (currentUrl.includes('/contact')) {
      console.log('   ✅ Quote button correctly navigates to contact page');
    } else {
      console.log('   ❌ Quote button does not navigate to contact page');
    }

    console.log('✅ Button fix tests completed successfully!');
    console.log('Screenshots saved:');
    console.log('- eastern-africa-fixed-buttons.png');
    console.log('- southern-africa-fixed-buttons.png');

  } catch (error) {
    console.error('❌ Button fix tests failed:', error.message);
  } finally {
    await browser.close();
  }
})();