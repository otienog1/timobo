const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Opening destinations page...');
    await page.goto('http://localhost:3002/destinations');
    await page.waitForLoadState('networkidle');

    // Check for console errors
    console.log('\n=== CHECKING FOR CONSOLE ERRORS ===');
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('❌ Console Error:', msg.text());
      }
    });

    // Check image loading
    console.log('\n=== CHECKING IMAGE LOADING ===');
    const images = await page.locator('img[alt*="safari destination"]').all();
    console.log(`Found ${images.length} destination images`);

    for (let i = 0; i < Math.min(images.length, 5); i++) {
      const img = images[i];
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      console.log(`Image ${i + 1}: ${alt}`);
      console.log(`  URL: ${src}`);

      try {
        const response = await page.request.get(src);
        console.log(`  Status: ${response.status()} ${response.statusText()}`);
      } catch (error) {
        console.log(`  Error: ${error.message}`);
      }
    }

    // Check CSS classes
    console.log('\n=== CHECKING CSS CLASSES ===');
    const firstDestCard = await page.locator('.group').first();
    const classes = await firstDestCard.getAttribute('class');
    console.log('First destination card classes:', classes);

    const firstImage = await page.locator('img[alt*="safari destination"]').first();
    const imgClasses = await firstImage.getAttribute('class');
    console.log('First image classes:', imgClasses);

    // Check computed styles
    const computedStyles = await page.evaluate(() => {
      const firstImg = document.querySelector('img[alt*="safari destination"]');
      if (firstImg) {
        const styles = window.getComputedStyle(firstImg);
        return {
          display: styles.display,
          position: styles.position,
          width: styles.width,
          height: styles.height,
          objectFit: styles.objectFit
        };
      }
      return null;
    });
    console.log('First image computed styles:', computedStyles);

    console.log('\n=== Taking screenshot for analysis ===');
    await page.screenshot({ path: 'debug-destinations.png', fullPage: true });

    // Wait a bit to observe
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  } finally {
    await browser.close();
  }
})();