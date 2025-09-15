const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Testing removal of "Plan This Experience" element...');
    await page.goto('http://localhost:3002/services/safari-experiences');
    await page.waitForLoadState('networkidle');

    // Check if the element still exists
    const planElements = await page.locator('text=Plan This Experience').count();
    console.log(`Found ${planElements} "Plan This Experience" elements`);

    if (planElements === 0) {
      console.log('✅ "Plan This Experience" element successfully removed!');
    } else {
      console.log('❌ "Plan This Experience" element still exists');
    }

    // Take screenshot for verification
    await page.screenshot({ path: 'safari-experiences-no-plan.png', fullPage: true });
    console.log('Screenshot saved: safari-experiences-no-plan.png');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();