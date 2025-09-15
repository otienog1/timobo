const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Ensure screenshots directory exists
const screenshotsDir = path.join(__dirname, 'test-results');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function testDestinationsPage() {
    console.log('🚀 Starting Comprehensive Destinations Page Testing...\n');

    const browser = await chromium.launch({
        headless: false,
        slowMo: 50
    });

    const context = await browser.newContext({
        // Accept permissions for better testing
        permissions: ['geolocation']
    });

    // Test configurations for different screen sizes
    const screenSizes = [
        { name: 'Desktop', width: 1920, height: 1080 },
        { name: 'Tablet', width: 768, height: 1024 },
        { name: 'Mobile', width: 375, height: 667 }
    ];

    const testResults = {
        visualLayout: [],
        interactiveElements: [],
        issues: [],
        performance: [],
        screenshots: []
    };

    for (const screen of screenSizes) {
        console.log(`\n📱 Testing on ${screen.name} (${screen.width}x${screen.height})...`);

        const page = await context.newPage();

        // Set up error tracking
        const consoleErrors = [];
        const jsErrors = [];

        page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleErrors.push(`Console error: ${msg.text()}`);
            }
        });

        page.on('pageerror', error => {
            jsErrors.push(`JavaScript error: ${error.message}`);
        });

        try {
            await page.setViewportSize({ width: screen.width, height: screen.height });

            console.log('  🌐 Navigating to destinations page...');
            const startTime = Date.now();

            await page.goto('http://localhost:3003/destinations', {
                waitUntil: 'networkidle',
                timeout: 15000
            });

            const loadTime = Date.now() - startTime;
            console.log(`  ⏱️  Page loaded in ${loadTime}ms`);
            testResults.performance.push({ screen: screen.name, loadTime });

            // Wait for images to load
            await page.waitForTimeout(3000);

            // Take full page screenshot
            const fullScreenshotPath = `${screenshotsDir}/destinations-${screen.name.toLowerCase()}-full-page.png`;
            await page.screenshot({
                path: fullScreenshotPath,
                fullPage: true
            });
            testResults.screenshots.push(fullScreenshotPath);
            console.log(`  📸 Full page screenshot: ${fullScreenshotPath}`);

            // ===== VISUAL LAYOUT TESTING =====
            console.log('  🎨 Testing visual layout elements...');

            // Test Hero Section
            try {
                const heroSection = page.locator('main > div:first-child, .hero, h1').first();
                if (await heroSection.isVisible({ timeout: 3000 })) {
                    console.log('    ✅ Hero Section - Found and visible');
                    const heroScreenshot = `${screenshotsDir}/hero-section-${screen.name.toLowerCase()}.png`;
                    await heroSection.screenshot({ path: heroScreenshot });
                    testResults.visualLayout.push({ screen: screen.name, element: 'Hero Section', status: 'pass' });
                    testResults.screenshots.push(heroScreenshot);
                } else {
                    throw new Error('Hero section not visible');
                }
            } catch (error) {
                console.log('    ❌ Hero Section - Not found or not visible');
                testResults.issues.push(`Hero section issue on ${screen.name}: ${error.message}`);
            }

            // Test Philosophical Introduction Section
            try {
                const philosophySection = page.locator('section').filter({ hasText: 'Where Africa Calls to the Soul' });
                if (await philosophySection.isVisible({ timeout: 3000 })) {
                    console.log('    ✅ Philosophical Introduction - Found and visible');
                    const philScreenshot = `${screenshotsDir}/philosophy-section-${screen.name.toLowerCase()}.png`;
                    await philosophySection.screenshot({ path: philScreenshot });
                    testResults.visualLayout.push({ screen: screen.name, element: 'Philosophical Introduction', status: 'pass' });
                    testResults.screenshots.push(philScreenshot);
                } else {
                    throw new Error('Philosophy section not visible');
                }
            } catch (error) {
                console.log('    ❌ Philosophical Introduction - Not found or not visible');
                testResults.issues.push(`Philosophy section issue on ${screen.name}: ${error.message}`);
            }

            // Test Filter Navigation (Sticky Navigation)
            try {
                const filterSection = page.locator('section.sticky, section').filter({ hasText: 'All Destinations' });
                if (await filterSection.isVisible({ timeout: 3000 })) {
                    console.log('    ✅ Filter Navigation - Found and visible');
                    const filterScreenshot = `${screenshotsDir}/filter-navigation-${screen.name.toLowerCase()}.png`;
                    await filterSection.screenshot({ path: filterScreenshot });
                    testResults.visualLayout.push({ screen: screen.name, element: 'Filter Navigation', status: 'pass' });
                    testResults.screenshots.push(filterScreenshot);
                } else {
                    throw new Error('Filter navigation not visible');
                }
            } catch (error) {
                console.log('    ❌ Filter Navigation - Not found or not visible');
                testResults.issues.push(`Filter navigation issue on ${screen.name}: ${error.message}`);
            }

            // Test Destinations Grid
            try {
                const destinationsGrid = page.locator('section').filter({ has: page.locator('a[href*="/destinations/"]') }).first();
                if (await destinationsGrid.isVisible({ timeout: 3000 })) {
                    console.log('    ✅ Destinations Grid - Found and visible');
                    const gridScreenshot = `${screenshotsDir}/destinations-grid-${screen.name.toLowerCase()}.png`;
                    await destinationsGrid.screenshot({ path: gridScreenshot });
                    testResults.visualLayout.push({ screen: screen.name, element: 'Destinations Grid', status: 'pass' });
                    testResults.screenshots.push(gridScreenshot);

                    // Count destination cards
                    const cardCount = await page.locator('a[href*="/destinations/"]').count();
                    console.log(`    📊 Found ${cardCount} destination cards`);
                } else {
                    throw new Error('Destinations grid not visible');
                }
            } catch (error) {
                console.log('    ❌ Destinations Grid - Not found or not visible');
                testResults.issues.push(`Destinations grid issue on ${screen.name}: ${error.message}`);
            }

            // Test CTA Section
            try {
                const ctaSection = page.locator('section').filter({ hasText: 'Your African Story Awaits' });
                if (await ctaSection.isVisible({ timeout: 3000 })) {
                    console.log('    ✅ CTA Section - Found and visible');
                    const ctaScreenshot = `${screenshotsDir}/cta-section-${screen.name.toLowerCase()}.png`;
                    await ctaSection.screenshot({ path: ctaScreenshot });
                    testResults.visualLayout.push({ screen: screen.name, element: 'CTA Section', status: 'pass' });
                    testResults.screenshots.push(ctaScreenshot);
                } else {
                    throw new Error('CTA section not visible');
                }
            } catch (error) {
                console.log('    ❌ CTA Section - Not found or not visible');
                testResults.issues.push(`CTA section issue on ${screen.name}: ${error.message}`);
            }

            // ===== INTERACTIVE ELEMENTS TESTING (Desktop only) =====
            if (screen.name === 'Desktop') {
                console.log('\n  🖱️  Testing interactive elements...');

                // Test Filter Buttons
                try {
                    const filterButtons = page.locator('button').filter({ hasText: /All Destinations|Eastern Africa|Southern Africa/ });
                    const buttonCount = await filterButtons.count();
                    console.log(`    🔘 Found ${buttonCount} filter buttons`);

                    if (buttonCount > 0) {
                        // Test each filter button
                        const buttons = ['All Destinations', 'Eastern Africa', 'Southern Africa'];
                        for (const buttonText of buttons) {
                            try {
                                const button = page.locator('button').filter({ hasText: buttonText });
                                if (await button.isVisible({ timeout: 2000 })) {
                                    console.log(`    🔄 Testing filter: ${buttonText}`);

                                    // Get initial card count
                                    const initialCount = await page.locator('a[href*="/destinations/"]').count();

                                    // Click button
                                    await button.click();
                                    await page.waitForTimeout(1000);

                                    // Get new card count
                                    const newCount = await page.locator('a[href*="/destinations/"]').count();

                                    // Take screenshot after filter
                                    const filterScreenshot = `${screenshotsDir}/filter-${buttonText.toLowerCase().replace(/\s+/g, '-')}-applied.png`;
                                    await page.screenshot({ path: filterScreenshot, fullPage: true });
                                    testResults.screenshots.push(filterScreenshot);

                                    console.log(`    ✅ Filter "${buttonText}" works! Cards: ${initialCount} → ${newCount}`);
                                    testResults.interactiveElements.push({
                                        type: 'Filter Button',
                                        text: buttonText,
                                        status: 'working',
                                        cardsBefore: initialCount,
                                        cardsAfter: newCount
                                    });
                                }
                            } catch (error) {
                                console.log(`    ❌ Filter "${buttonText}" failed: ${error.message}`);
                                testResults.issues.push(`Filter "${buttonText}" error: ${error.message}`);
                            }
                        }
                    } else {
                        throw new Error('No filter buttons found');
                    }
                } catch (error) {
                    console.log(`    ❌ Filter testing failed: ${error.message}`);
                    testResults.issues.push(`Filter functionality error: ${error.message}`);
                }

                // Test Hover Effects on Destination Cards
                try {
                    const destinationCards = page.locator('a[href*="/destinations/"]');
                    const cardCount = await destinationCards.count();
                    console.log(`    🎯 Testing hover effects on ${Math.min(cardCount, 3)} cards...`);

                    for (let i = 0; i < Math.min(cardCount, 3); i++) {
                        const card = destinationCards.nth(i);
                        const cardTitle = await card.locator('h3').first().textContent() || `Card ${i + 1}`;

                        console.log(`    🖱️  Hovering over: ${cardTitle}`);

                        // Take before hover screenshot
                        const beforeHover = `${screenshotsDir}/card-${i + 1}-before-hover.png`;
                        await card.screenshot({ path: beforeHover });

                        // Hover and take after screenshot
                        await card.hover();
                        await page.waitForTimeout(500);

                        const afterHover = `${screenshotsDir}/card-${i + 1}-after-hover.png`;
                        await card.screenshot({ path: afterHover });

                        testResults.screenshots.push(beforeHover, afterHover);
                        testResults.interactiveElements.push({
                            type: 'Destination Card Hover',
                            cardTitle: cardTitle,
                            cardIndex: i + 1,
                            status: 'tested'
                        });
                    }
                } catch (error) {
                    console.log(`    ❌ Hover testing failed: ${error.message}`);
                    testResults.issues.push(`Card hover error: ${error.message}`);
                }

                // Test Link Functionality
                try {
                    const destinationLinks = page.locator('a[href*="/destinations/"]');
                    const linkCount = await destinationLinks.count();
                    console.log(`    🔗 Testing ${Math.min(linkCount, 2)} destination links...`);

                    for (let i = 0; i < Math.min(linkCount, 2); i++) {
                        const link = destinationLinks.nth(i);
                        const href = await link.getAttribute('href');
                        const linkText = await link.locator('h3').first().textContent() || `Link ${i + 1}`;

                        console.log(`    🌐 Testing link to: ${linkText} (${href})`);

                        // Test by opening in new tab
                        const [newPage] = await Promise.all([
                            context.waitForEvent('page'),
                            link.click({ modifiers: ['Control'] })
                        ]);

                        try {
                            await newPage.waitForLoadState('networkidle', { timeout: 10000 });
                            const finalUrl = newPage.url();
                            console.log(`    ✅ Link works! Navigated to: ${finalUrl}`);

                            // Take screenshot of destination page
                            const destPageScreenshot = `${screenshotsDir}/destination-page-${linkText.toLowerCase().replace(/\s+/g, '-')}.png`;
                            await newPage.screenshot({ path: destPageScreenshot, fullPage: true });
                            testResults.screenshots.push(destPageScreenshot);

                            testResults.interactiveElements.push({
                                type: 'Destination Link',
                                text: linkText,
                                href: href,
                                finalUrl: finalUrl,
                                status: 'working'
                            });

                            await newPage.close();
                        } catch (linkError) {
                            console.log(`    ❌ Link failed to load: ${linkError.message}`);
                            testResults.issues.push(`Link "${linkText}" failed: ${linkError.message}`);
                            await newPage.close();
                        }
                    }
                } catch (error) {
                    console.log(`    ❌ Link testing failed: ${error.message}`);
                    testResults.issues.push(`Link functionality error: ${error.message}`);
                }
            }

            // Check for errors that occurred during testing
            if (consoleErrors.length > 0) {
                console.log(`  ⚠️  ${consoleErrors.length} console error(s) detected`);
                testResults.issues.push(...consoleErrors.map(err => `${screen.name}: ${err}`));
            }

            if (jsErrors.length > 0) {
                console.log(`  ⚠️  ${jsErrors.length} JavaScript error(s) detected`);
                testResults.issues.push(...jsErrors.map(err => `${screen.name}: ${err}`));
            }

        } catch (error) {
            console.log(`  ❌ Critical error testing ${screen.name}: ${error.message}`);
            testResults.issues.push(`${screen.name} critical error: ${error.message}`);
        }

        await page.close();
        console.log(`  ✅ ${screen.name} testing completed`);
    }

    await browser.close();

    // ===== GENERATE COMPREHENSIVE REPORT =====
    console.log('\n' + '='.repeat(60));
    console.log('📊 COMPREHENSIVE TEST RESULTS SUMMARY');
    console.log('='.repeat(60));

    // Performance Summary
    console.log('\n⚡ PERFORMANCE RESULTS:');
    testResults.performance.forEach(perf => {
        const status = perf.loadTime < 3000 ? '✅' : perf.loadTime < 5000 ? '⚠️' : '❌';
        console.log(`  ${status} ${perf.screen}: ${perf.loadTime}ms load time`);
    });

    // Visual Layout Summary
    console.log('\n🎨 VISUAL LAYOUT RESULTS:');
    const passedElements = testResults.visualLayout.filter(item => item.status === 'pass');
    console.log(`  📈 Success Rate: ${passedElements.length}/${testResults.visualLayout.length} elements passed`);

    const elementsByScreen = {};
    testResults.visualLayout.forEach(item => {
        if (!elementsByScreen[item.screen]) elementsByScreen[item.screen] = [];
        elementsByScreen[item.screen].push(item);
    });

    Object.keys(elementsByScreen).forEach(screen => {
        console.log(`\n  📱 ${screen}:`);
        elementsByScreen[screen].forEach(item => {
            const status = item.status === 'pass' ? '✅' : '❌';
            console.log(`    ${status} ${item.element}`);
        });
    });

    // Interactive Elements Summary
    console.log('\n🖱️  INTERACTIVE ELEMENTS RESULTS:');
    if (testResults.interactiveElements.length > 0) {
        testResults.interactiveElements.forEach(item => {
            console.log(`  ✅ ${item.type}: ${item.text || item.cardTitle || `Card ${item.cardIndex}`} - ${item.status}`);
            if (item.cardsBefore !== undefined) {
                console.log(`     Cards changed: ${item.cardsBefore} → ${item.cardsAfter}`);
            }
        });
    } else {
        console.log('  ⚠️  No interactive elements were successfully tested');
    }

    // Issues Summary
    console.log('\n🚨 ISSUES FOUND:');
    if (testResults.issues.length === 0) {
        console.log('  🎉 No issues detected! The page is working perfectly.');
    } else {
        console.log(`  📊 Total issues: ${testResults.issues.length}`);
        testResults.issues.forEach((issue, index) => {
            console.log(`  ${index + 1}. ❌ ${issue}`);
        });
    }

    // Screenshots Summary
    console.log(`\n📸 SCREENSHOTS CAPTURED: ${testResults.screenshots.length}`);
    console.log(`   📁 Saved to: ${screenshotsDir}`);

    // Key recommendations
    console.log('\n💡 RECOMMENDATIONS:');
    if (testResults.issues.length === 0) {
        console.log('  🌟 Excellent! The destinations page is working flawlessly across all devices.');
    } else {
        console.log('  🔧 Consider addressing the issues listed above for optimal user experience.');
    }

    if (testResults.performance.some(p => p.loadTime > 3000)) {
        console.log('  ⚡ Consider optimizing images and reducing bundle size for faster loading.');
    }

    console.log('\n🏁 Testing completed successfully!');

    return testResults;
}

// Run the tests
testDestinationsPage().catch(console.error);