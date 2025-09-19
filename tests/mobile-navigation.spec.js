const { test, expect } = require('@playwright/test');

// Define mobile viewport sizes to test
const mobileViewports = [
  { name: 'Mobile Small', width: 375, height: 667 },
  { name: 'Mobile Large', width: 414, height: 896 },
  { name: 'Mobile Extra Large', width: 428, height: 926 },
];

const baseURL = 'http://localhost:3005';

test.describe('Mobile Navigation Tests', () => {

  // Test mobile navigation background and backdrop
  test.describe('Mobile Navigation Background and Backdrop', () => {
    mobileViewports.forEach((viewport) => {
      test(`${viewport.name} - Navigation has proper background/backdrop`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Open mobile navigation
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await expect(mobileMenuButton).toBeVisible();
        await mobileMenuButton.click();

        // Wait for the sheet to open
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Check that the overlay/backdrop exists and has proper styling
        const overlay = page.locator('[data-radix-dialog-overlay]');
        await expect(overlay).toBeVisible();

        // Check overlay background color (should not be transparent)
        const overlayStyles = await overlay.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            backgroundColor: computed.backgroundColor,
            opacity: computed.opacity,
            position: computed.position,
            zIndex: computed.zIndex
          };
        });

        console.log(`${viewport.name} - Overlay styles:`, overlayStyles);

        // Verify overlay is not transparent
        expect(overlayStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
        expect(overlayStyles.backgroundColor).not.toBe('transparent');
        expect(parseFloat(overlayStyles.opacity)).toBeGreaterThan(0);

        // Check that the sheet content has proper background
        const sheetContent = page.locator('[data-radix-dialog-content]');
        await expect(sheetContent).toBeVisible();

        const sheetStyles = await sheetContent.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            backgroundColor: computed.backgroundColor,
            opacity: computed.opacity,
            position: computed.position
          };
        });

        console.log(`${viewport.name} - Sheet content styles:`, sheetStyles);

        // Verify sheet has solid background
        expect(sheetStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
        expect(sheetStyles.backgroundColor).not.toBe('transparent');

        // Close the navigation
        await page.locator('[data-radix-dialog-overlay]').click();
        await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
      });
    });
  });

  // Test that destination and services submenus are closed by default
  test.describe('Default Submenu States', () => {
    mobileViewports.forEach((viewport) => {
      test(`${viewport.name} - Destination and Services submenus closed by default`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Open mobile navigation
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Check that destination submenu is closed by default
        const destinationSubmenu = page.locator('text=Eastern Africa').first();
        await expect(destinationSubmenu).not.toBeVisible();

        const destinationCountries = page.locator('text=Kenya').first();
        await expect(destinationCountries).not.toBeVisible();

        // Check that services submenu is closed by default
        const servicesSubmenu = page.locator('text=Safari Experiences').first();
        await expect(servicesSubmenu).not.toBeVisible();

        // Verify dropdown arrows are present and point down (not rotated)
        const destinationArrow = page.locator('button:near(:text("Destinations"))').locator('svg').first();
        await expect(destinationArrow).toBeVisible();

        const servicesArrow = page.locator('button:near(:text("Services"))').locator('svg').first();
        await expect(servicesArrow).toBeVisible();

        // Check that arrows are not rotated (indicating closed state)
        const destinationArrowClass = await destinationArrow.getAttribute('class');
        const servicesArrowClass = await servicesArrow.getAttribute('class');

        expect(destinationArrowClass).not.toContain('rotate-180');
        expect(servicesArrowClass).not.toContain('rotate-180');

        // Close navigation
        await page.locator('[data-radix-dialog-overlay]').click();
        await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
      });
    });
  });

  // Test dropdown arrow toggle functionality
  test.describe('Dropdown Toggle Functionality', () => {
    mobileViewports.forEach((viewport) => {
      test(`${viewport.name} - Destination dropdown toggle works correctly`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Open mobile navigation
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Find and click the destination dropdown button
        const destinationDropdownBtn = page.locator('button:near(:text("Destinations"))').first();
        await expect(destinationDropdownBtn).toBeVisible();

        // Click to open destinations
        await destinationDropdownBtn.click();

        // Verify submenu opens
        await expect(page.locator('text=Eastern Africa').first()).toBeVisible();
        await expect(page.locator('text=Southern Africa').first()).toBeVisible();
        await expect(page.locator('text=Kenya').first()).toBeVisible();

        // Verify arrow rotates
        const destinationArrow = page.locator('button:near(:text("Destinations"))').locator('svg').first();
        const arrowClassAfterOpen = await destinationArrow.getAttribute('class');
        expect(arrowClassAfterOpen).toContain('rotate-180');

        // Click to close destinations
        await destinationDropdownBtn.click();

        // Verify submenu closes
        await expect(page.locator('text=Eastern Africa').first()).not.toBeVisible();
        await expect(page.locator('text=Kenya').first()).not.toBeVisible();

        // Verify arrow rotates back
        const arrowClassAfterClose = await destinationArrow.getAttribute('class');
        expect(arrowClassAfterClose).not.toContain('rotate-180');

        // Close navigation
        await page.locator('[data-radix-dialog-overlay]').click();
        await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
      });

      test(`${viewport.name} - Services dropdown toggle works correctly`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Open mobile navigation
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Find and click the services dropdown button
        const servicesDropdownBtn = page.locator('button:near(:text("Services"))').first();
        await expect(servicesDropdownBtn).toBeVisible();

        // Click to open services
        await servicesDropdownBtn.click();

        // Verify submenu opens
        await expect(page.locator('text=Safari Experiences').first()).toBeVisible();
        await expect(page.locator('text=MICE Solutions').first()).toBeVisible();
        await expect(page.locator('text=Adventure Travel').first()).toBeVisible();

        // Verify arrow rotates
        const servicesArrow = page.locator('button:near(:text("Services"))').locator('svg').first();
        const arrowClassAfterOpen = await servicesArrow.getAttribute('class');
        expect(arrowClassAfterOpen).toContain('rotate-180');

        // Click to close services
        await servicesDropdownBtn.click();

        // Verify submenu closes
        await expect(page.locator('text=Safari Experiences').first()).not.toBeVisible();
        await expect(page.locator('text=MICE Solutions').first()).not.toBeVisible();

        // Verify arrow rotates back
        const arrowClassAfterClose = await servicesArrow.getAttribute('class');
        expect(arrowClassAfterClose).not.toContain('rotate-180');

        // Close navigation
        await page.locator('[data-radix-dialog-overlay]').click();
        await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
      });
    });
  });

  // Test text legibility on mobile devices
  test.describe('Text Legibility', () => {
    mobileViewports.forEach((viewport) => {
      test(`${viewport.name} - Text is legible and properly styled`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Open mobile navigation
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Check main navigation links font sizes and contrast
        const mainLinks = [
          page.locator('text=Home').first(),
          page.locator('text=Destinations').first(),
          page.locator('text=Services').first(),
          page.locator('text=About').first(),
          page.locator('text=Contact').first()
        ];

        for (const link of mainLinks) {
          if (await link.isVisible()) {
            const styles = await link.evaluate((el) => {
              const computed = window.getComputedStyle(el);
              return {
                fontSize: computed.fontSize,
                fontWeight: computed.fontWeight,
                color: computed.color,
                lineHeight: computed.lineHeight
              };
            });

            console.log(`${viewport.name} - Main link styles:`, styles);

            // Verify font size is readable on mobile (at least 16px)
            const fontSizeValue = parseFloat(styles.fontSize);
            expect(fontSizeValue).toBeGreaterThanOrEqual(14); // Minimum readable size

            // Verify color is not transparent
            expect(styles.color).not.toBe('rgba(0, 0, 0, 0)');
            expect(styles.color).not.toBe('transparent');
          }
        }

        // Open destinations to test submenu text
        const destinationDropdownBtn = page.locator('button:near(:text("Destinations"))').first();
        await destinationDropdownBtn.click();

        // Check submenu text legibility
        const submenuLinks = [
          page.locator('text=Eastern Africa').first(),
          page.locator('text=Kenya').first(),
          page.locator('text=Tanzania').first()
        ];

        for (const link of submenuLinks) {
          if (await link.isVisible()) {
            const styles = await link.evaluate((el) => {
              const computed = window.getComputedStyle(el);
              return {
                fontSize: computed.fontSize,
                color: computed.color,
                fontWeight: computed.fontWeight
              };
            });

            console.log(`${viewport.name} - Submenu link styles:`, styles);

            // Verify submenu font size is readable
            const fontSizeValue = parseFloat(styles.fontSize);
            expect(fontSizeValue).toBeGreaterThanOrEqual(12); // Smaller but still readable

            // Verify color is not transparent
            expect(styles.color).not.toBe('rgba(0, 0, 0, 0)');
            expect(styles.color).not.toBe('transparent');
          }
        }

        // Close navigation
        await page.locator('[data-radix-dialog-overlay]').click();
        await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
      });
    });
  });

  // Test mobile navigation functionality across viewport sizes
  test.describe('Mobile Navigation Functionality', () => {
    mobileViewports.forEach((viewport) => {
      test(`${viewport.name} - Complete navigation flow works`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Ensure mobile navigation button is visible
        const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
        await expect(mobileMenuButton).toBeVisible();

        // Desktop navigation should be hidden
        const desktopNav = page.locator('nav.hidden.md\\:flex');
        if (await desktopNav.count() > 0) {
          await expect(desktopNav).not.toBeVisible();
        }

        // Open mobile navigation
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        // Test basic navigation - click Home
        const homeLink = page.locator('text=Home').first();
        await expect(homeLink).toBeVisible();

        // Test destinations dropdown
        const destinationDropdownBtn = page.locator('button:near(:text("Destinations"))').first();
        await destinationDropdownBtn.click();

        // Navigate to a specific destination
        const kenyaLink = page.locator('text=Kenya').first();
        await expect(kenyaLink).toBeVisible();
        await kenyaLink.click();

        // Verify navigation works (page should change)
        await page.waitForLoadState('networkidle');
        const currentUrl = page.url();
        expect(currentUrl).toContain('kenya');

        // Go back to home
        await page.goto(baseURL, { waitUntil: 'networkidle' });

        // Test services dropdown
        await mobileMenuButton.click();
        await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

        const servicesDropdownBtn = page.locator('button:near(:text("Services"))').first();
        await servicesDropdownBtn.click();

        const safariLink = page.locator('text=Safari Experiences').first();
        await expect(safariLink).toBeVisible();
        await safariLink.click();

        // Verify services navigation works
        await page.waitForLoadState('networkidle');
        const servicesUrl = page.url();
        expect(servicesUrl).toContain('safari-experiences');
      });
    });
  });

  // Test navigation accessibility
  test.describe('Mobile Navigation Accessibility', () => {
    test('Mobile navigation is accessible', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      // Check mobile menu button has proper ARIA attributes
      const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();

      // Check for screen reader text
      const srText = page.locator('text=Toggle Menu');
      await expect(srText).toBeInViewport();

      // Open navigation and check for proper focus management
      await mobileMenuButton.click();
      await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

      // Check that sheet has proper ARIA attributes
      const sheet = page.locator('[data-radix-dialog-content]');
      await expect(sheet).toHaveAttribute('role', 'dialog');

      // Check that close button is accessible
      const closeButton = page.locator('[data-radix-dialog-close]');
      await expect(closeButton).toBeVisible();

      // Test keyboard navigation
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter'); // Should close the sheet

      await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });
    });
  });

  // Performance test for mobile navigation
  test.describe('Mobile Navigation Performance', () => {
    test('Mobile navigation opens and closes smoothly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(baseURL, { waitUntil: 'networkidle' });

      const startTime = Date.now();

      // Open mobile navigation
      const mobileMenuButton = page.locator('button[aria-label="Toggle Menu"], button:has(svg)', { hasText: /Toggle Menu/ }).first();
      await mobileMenuButton.click();
      await page.waitForSelector('[data-state="open"]', { timeout: 5000 });

      const openTime = Date.now() - startTime;
      console.log(`Mobile navigation open time: ${openTime}ms`);

      // Verify it opens within reasonable time (under 1 second)
      expect(openTime).toBeLessThan(1000);

      const closeStartTime = Date.now();

      // Close navigation
      await page.locator('[data-radix-dialog-overlay]').click();
      await page.waitForSelector('[data-state="closed"]', { timeout: 5000 });

      const closeTime = Date.now() - closeStartTime;
      console.log(`Mobile navigation close time: ${closeTime}ms`);

      // Verify it closes within reasonable time
      expect(closeTime).toBeLessThan(1000);
    });
  });
});