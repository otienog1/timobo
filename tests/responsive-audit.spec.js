const { test, expect } = require('@playwright/test');

// Define viewport sizes to test
const viewports = [
  { name: 'Mobile Small', width: 375, height: 667 },
  { name: 'Mobile Large', width: 414, height: 896 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop Small', width: 1024, height: 768 },
  { name: 'Desktop Large', width: 1440, height: 900 },
];

const baseURL = 'http://localhost:3002';

// Main test suite
test.describe('Landing Page Responsive Audit', () => {

  // Test each viewport size
  viewports.forEach((viewport) => {
    test(`${viewport.name} (${viewport.width}x${viewport.height}) - Responsive Layout`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      // Take screenshot for visual inspection
      await page.screenshot({
        path: `test-results/screenshots/${viewport.name.toLowerCase().replace(' ', '-')}-full-page.png`,
        fullPage: true
      });

      // Test basic responsiveness
      const body = await page.locator('body').boundingBox();
      expect(body.width).toBeLessThanOrEqual(viewport.width);

      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.body.scrollWidth > window.innerWidth;
      });

      console.log(`${viewport.name}: Horizontal scroll detected: ${hasHorizontalScroll}`);
    });
  });

  // Typography and Font Size Analysis
  test('Typography Analysis Across Viewports', async ({ page }) => {
    const typographyIssues = [];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      // Check heading font sizes
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const styles = await heading.evaluate((el) => {
          const computedStyle = window.getComputedStyle(el);
          return {
            tagName: el.tagName,
            fontSize: computedStyle.fontSize,
            fontWeight: computedStyle.fontWeight,
            lineHeight: computedStyle.lineHeight,
            marginTop: computedStyle.marginTop,
            marginBottom: computedStyle.marginBottom,
            textContent: el.textContent.substring(0, 50)
          };
        });

        const fontSizeNum = parseFloat(styles.fontSize);

        // Check for font size issues
        if (viewport.width <= 768 && fontSizeNum < 14) {
          typographyIssues.push({
            viewport: viewport.name,
            element: styles.tagName,
            issue: 'Font too small for mobile',
            fontSize: styles.fontSize,
            text: styles.textContent
          });
        }

        if (viewport.width >= 1024 && fontSizeNum < 16 && styles.tagName === 'P') {
          typographyIssues.push({
            viewport: viewport.name,
            element: styles.tagName,
            issue: 'Font too small for desktop',
            fontSize: styles.fontSize,
            text: styles.textContent
          });
        }
      }

      // Check paragraph font sizes
      const paragraphs = await page.locator('p').all();
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        const fontSize = await p.evaluate((el) => {
          return window.getComputedStyle(el).fontSize;
        });

        const fontSizeNum = parseFloat(fontSize);
        if (viewport.width <= 768 && fontSizeNum < 16) {
          const text = await p.textContent();
          typographyIssues.push({
            viewport: viewport.name,
            element: 'P',
            issue: 'Paragraph font too small for mobile',
            fontSize: fontSize,
            text: text?.substring(0, 50)
          });
        }
      }
    }

    console.log('Typography Issues Found:', JSON.stringify(typographyIssues, null, 2));
  });

  // Color Contrast Analysis
  test('Color Contrast Analysis', async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    // Inject axe-core for accessibility testing
    await page.addScriptTag({
      url: 'https://unpkg.com/axe-core@4.8.2/axe.min.js'
    });

    // Run color contrast checks
    const contrastResults = await page.evaluate(async () => {
      const results = await axe.run(document, {
        rules: {
          'color-contrast': { enabled: true },
          'color-contrast-enhanced': { enabled: true }
        }
      });
      return results.violations;
    });

    console.log('Color Contrast Violations:', JSON.stringify(contrastResults, null, 2));

    // Manual color contrast check for key elements
    const colorAnalysis = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, p, a, button, .nav-link');
      const colorIssues = [];

      elements.forEach((el, index) => {
        if (index < 20) { // Limit to first 20 elements
          const styles = window.getComputedStyle(el);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;
          const textContent = el.textContent?.substring(0, 30);

          colorIssues.push({
            element: el.tagName,
            color: color,
            backgroundColor: backgroundColor,
            text: textContent,
            className: el.className
          });
        }
      });

      return colorIssues;
    });

    console.log('Color Analysis:', JSON.stringify(colorAnalysis, null, 2));
  });

  // Spacing Analysis
  test('Spacing Consistency Analysis', async ({ page }) => {
    const spacingIssues = [];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      // Analyze section spacing
      const sections = await page.locator('section, div[class*="section"], .container, main > div').all();

      for (let i = 0; i < sections.length && i < 10; i++) {
        const section = sections[i];
        const spacing = await section.evaluate((el) => {
          const styles = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return {
            marginTop: styles.marginTop,
            marginBottom: styles.marginBottom,
            paddingTop: styles.paddingTop,
            paddingBottom: styles.paddingBottom,
            height: rect.height,
            width: rect.width,
            className: el.className,
            tagName: el.tagName
          };
        });

        // Check for inconsistent spacing
        const marginTopNum = parseFloat(spacing.marginTop);
        const marginBottomNum = parseFloat(spacing.marginBottom);
        const paddingTopNum = parseFloat(spacing.paddingTop);
        const paddingBottomNum = parseFloat(spacing.paddingBottom);

        // Flag unusual spacing patterns
        if (marginTopNum > 100 || marginBottomNum > 100) {
          spacingIssues.push({
            viewport: viewport.name,
            element: spacing.tagName,
            className: spacing.className,
            issue: 'Excessive margin spacing',
            marginTop: spacing.marginTop,
            marginBottom: spacing.marginBottom
          });
        }

        if (viewport.width <= 768 && (paddingTopNum > 60 || paddingBottomNum > 60)) {
          spacingIssues.push({
            viewport: viewport.name,
            element: spacing.tagName,
            className: spacing.className,
            issue: 'Excessive padding on mobile',
            paddingTop: spacing.paddingTop,
            paddingBottom: spacing.paddingBottom
          });
        }
      }
    }

    console.log('Spacing Issues Found:', JSON.stringify(spacingIssues, null, 2));
  });

  // Visual Hierarchy Analysis
  test('Visual Hierarchy Analysis', async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    const hierarchyAnalysis = await page.evaluate(() => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const hierarchyIssues = [];
      const headingData = [];

      headings.forEach((heading, index) => {
        const styles = window.getComputedStyle(heading);
        const rect = heading.getBoundingClientRect();

        const data = {
          level: parseInt(heading.tagName.charAt(1)),
          tagName: heading.tagName,
          fontSize: parseFloat(styles.fontSize),
          fontWeight: styles.fontWeight,
          position: rect.top,
          text: heading.textContent?.substring(0, 40),
          className: heading.className
        };

        headingData.push(data);
      });

      // Check heading hierarchy
      for (let i = 1; i < headingData.length; i++) {
        const current = headingData[i];
        const previous = headingData[i - 1];

        // Check if font sizes follow proper hierarchy
        if (current.level < previous.level && current.fontSize >= previous.fontSize) {
          hierarchyIssues.push({
            issue: 'Higher level heading has smaller or equal font size',
            current: current,
            previous: previous
          });
        }

        // Check for skipped heading levels
        if (current.level > previous.level + 1) {
          hierarchyIssues.push({
            issue: 'Skipped heading level',
            current: current,
            previous: previous
          });
        }
      }

      return {
        headingData: headingData,
        hierarchyIssues: hierarchyIssues
      };
    });

    console.log('Visual Hierarchy Analysis:', JSON.stringify(hierarchyAnalysis, null, 2));
  });

  // Layout Issues Detection
  test('Layout Issues Detection', async ({ page }) => {
    const layoutIssues = [];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      // Check for overlapping elements
      const overlappingElements = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('*')).filter(el => {
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });

        const overlaps = [];

        for (let i = 0; i < Math.min(elements.length, 50); i++) {
          for (let j = i + 1; j < Math.min(elements.length, 50); j++) {
            const rect1 = elements[i].getBoundingClientRect();
            const rect2 = elements[j].getBoundingClientRect();

            // Check if elements overlap
            const overlap = !(rect1.right < rect2.left ||
                            rect2.right < rect1.left ||
                            rect1.bottom < rect2.top ||
                            rect2.bottom < rect1.top);

            if (overlap && !elements[j].contains(elements[i]) && !elements[i].contains(elements[j])) {
              overlaps.push({
                element1: elements[i].tagName + (elements[i].className ? '.' + elements[i].className : ''),
                element2: elements[j].tagName + (elements[j].className ? '.' + elements[j].className : ''),
                rect1: rect1,
                rect2: rect2
              });
            }
          }
        }

        return overlaps.slice(0, 10); // Limit to first 10 overlaps
      });

      if (overlappingElements.length > 0) {
        layoutIssues.push({
          viewport: viewport.name,
          issue: 'Overlapping elements detected',
          overlaps: overlappingElements
        });
      }

      // Check for elements extending beyond viewport
      const overflowElements = await page.evaluate((viewportWidth) => {
        const elements = document.querySelectorAll('*');
        const overflowing = [];

        elements.forEach((el, index) => {
          if (index < 30) { // Check first 30 elements
            const rect = el.getBoundingClientRect();
            if (rect.right > viewportWidth && rect.width > 10) {
              overflowing.push({
                element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''),
                width: rect.width,
                right: rect.right,
                viewportWidth: viewportWidth,
                overflow: rect.right - viewportWidth
              });
            }
          }
        });

        return overflowing;
      }, viewport.width);

      if (overflowElements.length > 0) {
        layoutIssues.push({
          viewport: viewport.name,
          issue: 'Elements overflowing viewport',
          elements: overflowElements
        });
      }
    }

    console.log('Layout Issues Found:', JSON.stringify(layoutIssues, null, 2));
  });

  // Performance and Loading Analysis
  test('Performance Analysis', async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    // Analyze image loading and optimization
    const imageAnalysis = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const imageIssues = [];

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const displayWidth = rect.width;
        const displayHeight = rect.height;

        // Check for oversized images
        if (naturalWidth > displayWidth * 2 || naturalHeight > displayHeight * 2) {
          imageIssues.push({
            src: img.src,
            issue: 'Image much larger than display size',
            naturalSize: `${naturalWidth}x${naturalHeight}`,
            displaySize: `${Math.round(displayWidth)}x${Math.round(displayHeight)}`,
            alt: img.alt,
            loading: img.loading
          });
        }

        // Check for missing alt text
        if (!img.alt || img.alt.trim() === '') {
          imageIssues.push({
            src: img.src,
            issue: 'Missing alt text',
            loading: img.loading
          });
        }

        // Check loading attribute
        if (!img.loading) {
          imageIssues.push({
            src: img.src,
            issue: 'Missing loading attribute',
            alt: img.alt
          });
        }
      });

      return imageIssues;
    });

    console.log('Image Analysis:', JSON.stringify(imageAnalysis, null, 2));
  });
});