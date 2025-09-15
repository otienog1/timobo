const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing specific button link functionality...');

    await page.goto('http://localhost:3002/destinations/southern');
    await page.waitForLoadState('networkidle');

    // Look for the specific button with href="/contact"
    const quoteButtons = await page.locator('a[href="/contact"]:has-text("Get Your Southern Africa Quote")');
    const count = await quoteButtons.count();
    console.log(`Found ${count} quote buttons with contact link`);

    if (count > 0) {
      console.log('Testing first quote button...');
      await quoteButtons.first().click();
      await page.waitForLoadState('networkidle');

      const currentUrl = page.url();
      console.log(`Current URL after click: ${currentUrl}`);

      if (currentUrl.includes('/contact')) {
        console.log('✅ Quote button successfully navigates to contact page');
      } else {
        console.log('❌ Quote button failed to navigate to contact page');
      }
    } else {
      console.log('❌ No quote buttons with contact links found');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();