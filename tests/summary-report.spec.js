const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'Mobile Small', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop Small', width: 1024, height: 768 },
  { name: 'Desktop Large', width: 1440, height: 900 },
];

const baseURL = 'http://localhost:3002';

test('Comprehensive Responsive Audit Summary', async ({ page }) => {
  const auditResults = {
    horizontalScrollIssues: [],
    typographyIssues: [],
    colorContrastIssues: [],
    spacingIssues: [],
    visualHierarchyIssues: [],
    layoutOverflowIssues: [],
    performanceIssues: []
  };

  // Test each viewport for horizontal scroll
  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(baseURL, { waitUntil: 'networkidle' });

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > window.innerWidth;
    });

    if (hasHorizontalScroll) {
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      auditResults.horizontalScrollIssues.push({
        viewport: viewport.name,
        actualWidth: scrollWidth,
        viewportWidth: viewport.width,
        overflow: scrollWidth - viewport.width
      });
    }

    // Check for elements overflowing viewport
    const overflowElements = await page.evaluate((viewportWidth) => {
      const elements = document.querySelectorAll('*');
      const overflowing = [];

      elements.forEach((el, index) => {
        if (index < 20) { // Check first 20 elements
          const rect = el.getBoundingClientRect();
          if (rect.right > viewportWidth + 10 && rect.width > 10) {
            const computedStyle = window.getComputedStyle(el);
            overflowing.push({
              element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''),
              width: Math.round(rect.width),
              right: Math.round(rect.right),
              overflow: Math.round(rect.right - viewportWidth),
              position: computedStyle.position
            });
          }
        }
      });

      return overflowing;
    }, viewport.width);

    if (overflowElements.length > 0) {
      auditResults.layoutOverflowIssues.push({
        viewport: viewport.name,
        elements: overflowElements
      });
    }
  }

  // Typography analysis on desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  const typographyAnalysis = await page.evaluate(() => {
    const issues = [];

    // Check paragraph fonts
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      const styles = window.getComputedStyle(p);
      const fontSize = parseFloat(styles.fontSize);

      if (fontSize < 16) {
        issues.push({
          element: 'Paragraph',
          fontSize: styles.fontSize,
          issue: 'Font too small for readability (recommended: 16px minimum)',
          text: p.textContent?.substring(0, 40) + '...'
        });
      }
    });

    // Check heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach(heading => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      const styles = window.getComputedStyle(heading);

      if (currentLevel > previousLevel + 1 && previousLevel > 0) {
        issues.push({
          element: heading.tagName,
          issue: 'Skipped heading level (accessibility issue)',
          text: heading.textContent?.substring(0, 40) + '...',
          fontSize: styles.fontSize
        });
      }

      previousLevel = currentLevel;
    });

    return issues;
  });

  auditResults.typographyIssues = typographyAnalysis;

  // Color contrast analysis
  await page.addScriptTag({
    url: 'https://unpkg.com/axe-core@4.8.2/axe.min.js'
  });

  const colorContrastResults = await page.evaluate(async () => {
    const results = await axe.run(document, {
      rules: {
        'color-contrast': { enabled: true },
        'color-contrast-enhanced': { enabled: true }
      }
    });

    return results.violations.map(violation => ({
      rule: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodeCount: violation.nodes.length,
      examples: violation.nodes.slice(0, 3).map(node => ({
        html: node.html.substring(0, 100),
        contrastRatio: node.any[0]?.data?.contrastRatio,
        expectedRatio: node.any[0]?.data?.expectedContrastRatio
      }))
    }));
  });

  auditResults.colorContrastIssues = colorContrastResults;

  // Spacing consistency analysis
  const spacingAnalysis = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, .container, main > div');
    const spacingIssues = [];

    sections.forEach((section, index) => {
      if (index < 8) { // Check first 8 sections
        const styles = window.getComputedStyle(section);
        const marginTop = parseFloat(styles.marginTop);
        const marginBottom = parseFloat(styles.marginBottom);
        const paddingTop = parseFloat(styles.paddingTop);
        const paddingBottom = parseFloat(styles.paddingBottom);

        if (marginTop > 80 || marginBottom > 80) {
          spacingIssues.push({
            element: section.tagName + (section.className ? '.' + section.className.split(' ')[0] : ''),
            issue: 'Excessive margin spacing',
            marginTop: styles.marginTop,
            marginBottom: styles.marginBottom
          });
        }

        if (paddingTop > 80 || paddingBottom > 80) {
          spacingIssues.push({
            element: section.tagName + (section.className ? '.' + section.className.split(' ')[0] : ''),
            issue: 'Excessive padding',
            paddingTop: styles.paddingTop,
            paddingBottom: styles.paddingBottom
          });
        }
      }
    });

    return spacingIssues;
  });

  auditResults.spacingIssues = spacingAnalysis;

  // Image optimization analysis
  const imageAnalysis = await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    const imageIssues = [];

    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      const issues = [];

      // Check for missing alt text
      if (!img.alt || img.alt.trim() === '') {
        issues.push('Missing alt text (accessibility issue)');
      }

      // Check for missing loading attribute
      if (!img.loading) {
        issues.push('Missing lazy loading attribute');
      }

      // Check for oversized images
      if (img.naturalWidth > rect.width * 2) {
        issues.push(`Image oversized: ${img.naturalWidth}px actual vs ${Math.round(rect.width)}px display`);
      }

      if (issues.length > 0) {
        imageIssues.push({
          src: img.src.split('/').pop(),
          issues: issues,
          displaySize: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
          naturalSize: `${img.naturalWidth}x${img.naturalHeight}`
        });
      }
    });

    return imageIssues;
  });

  auditResults.performanceIssues = imageAnalysis;

  // Print comprehensive summary
  console.log('\n=== COMPREHENSIVE RESPONSIVE AUDIT SUMMARY ===\n');

  console.log('🚨 HORIZONTAL SCROLL ISSUES:');
  if (auditResults.horizontalScrollIssues.length === 0) {
    console.log('✅ No horizontal scroll issues detected');
  } else {
    auditResults.horizontalScrollIssues.forEach(issue => {
      console.log(`❌ ${issue.viewport}: Content width ${issue.actualWidth}px exceeds viewport ${issue.viewportWidth}px by ${issue.overflow}px`);
    });
  }

  console.log('\n📱 LAYOUT OVERFLOW ISSUES:');
  if (auditResults.layoutOverflowIssues.length === 0) {
    console.log('✅ No layout overflow issues detected');
  } else {
    auditResults.layoutOverflowIssues.forEach(viewport => {
      console.log(`❌ ${viewport.viewport}:`);
      viewport.elements.forEach(el => {
        console.log(`  - ${el.element}: width ${el.width}px, extends ${el.overflow}px beyond viewport`);
      });
    });
  }

  console.log('\n🔤 TYPOGRAPHY ISSUES:');
  if (auditResults.typographyIssues.length === 0) {
    console.log('✅ No critical typography issues detected');
  } else {
    auditResults.typographyIssues.forEach(issue => {
      console.log(`❌ ${issue.element}: ${issue.issue} (${issue.fontSize || 'N/A'})`);
      console.log(`   Text: "${issue.text}"`);
    });
  }

  console.log('\n🎨 COLOR CONTRAST ISSUES:');
  if (auditResults.colorContrastIssues.length === 0) {
    console.log('✅ No color contrast violations detected');
  } else {
    auditResults.colorContrastIssues.forEach(violation => {
      console.log(`❌ ${violation.rule} (${violation.impact}): ${violation.nodeCount} elements`);
      console.log(`   ${violation.description}`);
      violation.examples.forEach(example => {
        if (example.contrastRatio) {
          console.log(`   Contrast: ${example.contrastRatio} (needs ${example.expectedRatio})`);
        }
      });
    });
  }

  console.log('\n📏 SPACING CONSISTENCY ISSUES:');
  if (auditResults.spacingIssues.length === 0) {
    console.log('✅ No excessive spacing issues detected');
  } else {
    auditResults.spacingIssues.forEach(issue => {
      console.log(`❌ ${issue.element}: ${issue.issue}`);
      if (issue.marginTop) console.log(`   Margin: ${issue.marginTop} / ${issue.marginBottom}`);
      if (issue.paddingTop) console.log(`   Padding: ${issue.paddingTop} / ${issue.paddingBottom}`);
    });
  }

  console.log('\n📸 PERFORMANCE & IMAGE ISSUES:');
  if (auditResults.performanceIssues.length === 0) {
    console.log('✅ No image optimization issues detected');
  } else {
    auditResults.performanceIssues.forEach(issue => {
      console.log(`❌ ${issue.src}: ${issue.issues.join(', ')}`);
      console.log(`   Size: ${issue.naturalSize} → ${issue.displaySize}`);
    });
  }

  console.log('\n=== RECOMMENDATIONS ===');

  if (auditResults.horizontalScrollIssues.length > 0) {
    console.log('\n📱 Mobile Responsiveness:');
    console.log('- Fix horizontal scroll on tablet and desktop-small viewports');
    console.log('- Check for fixed-width elements or missing responsive classes');
    console.log('- Use max-width: 100% on images and containers');
  }

  if (auditResults.colorContrastIssues.length > 0) {
    console.log('\n🎨 Accessibility:');
    console.log('- Improve color contrast ratios for WCAG AAA compliance');
    console.log('- Add missing button labels and alt text');
    console.log('- Use darker colors for text on light backgrounds');
  }

  if (auditResults.typographyIssues.length > 0) {
    console.log('\n🔤 Typography:');
    console.log('- Increase font sizes for better readability (min 16px for body text)');
    console.log('- Fix heading hierarchy issues for accessibility');
    console.log('- Ensure consistent line heights and spacing');
  }

  if (auditResults.performanceIssues.length > 0) {
    console.log('\n⚡ Performance:');
    console.log('- Add lazy loading to images');
    console.log('- Optimize image sizes to match display dimensions');
    console.log('- Add proper alt text for accessibility');
  }

  console.log('\n📊 Generated screenshots at: test-results/screenshots/');
  console.log('   - mobile-small-full-page.png');
  console.log('   - tablet-full-page.png');
  console.log('   - desktop-small-full-page.png');
  console.log('   - desktop-large-full-page.png');
});