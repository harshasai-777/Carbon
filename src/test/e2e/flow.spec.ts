import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('EcoSync Carbon Tracker E2E Flow', () => {
  test('should load landing page, complete the assessment, verify the dashboard, and pass automated accessibility audits', async ({ page }) => {
    // 1. Visit landing page
    await page.goto('/');

    // Check accessibility on the home landing page
    const homeA11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(homeA11y.violations).toEqual([]);

    // Click CTA to start assessment
    await page.getByRole('link', { name: 'Start Carbon Assessment' }).click();
    await page.waitForURL('/calculator');

    // 2. Step 1: Region Selection
    // Check accessibility on Calculator step 1
    let stepA11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(stepA11y.violations).toEqual([]);

    await page.getByLabel('United Kingdom').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 3. Step 2: Transport
    await page.getByLabel('What do you drive?').selectOption({ label: 'Hybrid' });
    await page.getByLabel('Distance driven').fill('150');
    await page.getByLabel('Public transport').fill('80');
    await page.getByLabel('Short-haul flights').fill('2');
    await page.getByLabel('Long-haul flights').fill('1');
    await page.getByRole('button', { name: 'Continue' }).click();

    // 4. Step 3: Home Energy
    await page.getByLabel('Electricity use').fill('350');
    await page.getByLabel('Renewable electricity').fill('40');
    await page.getByLabel('How is your home heated?').selectOption({ label: 'Heat pump' });
    await page.getByLabel('Heating fuel used').fill('200');
    await page.getByLabel('Household size').fill('3');
    await page.getByRole('button', { name: 'Continue' }).click();

    // 5. Step 4: Food
    await page.getByLabel('Vegan').click();
    await page.getByLabel('Low — I rarely waste food').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 6. Step 5: Shopping & Consumption
    await page.getByLabel('Average').click();
    await page.getByLabel('I recycle consistently').check();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 7. Step 6: Review Step
    // Check accessibility on Review Step
    stepA11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(stepA11y.violations).toEqual([]);

    // Submit form
    await page.getByRole('button', { name: 'See my results' }).click();
    await page.waitForURL('/dashboard');

    // 8. Dashboard View
    // Check that results metrics are loaded and visible
    await expect(page.getByRole('heading', { name: 'Your Impact', level: 1 })).toBeVisible();
    await expect(page.getByText('Annual footprint')).toBeVisible();
    await expect(page.getByText('Vs. 1.5°C target')).toBeVisible();
    await expect(page.getByText('Vs. United Kingdom')).toBeVisible();

    // Check accessibility on the Dashboard page
    const dashboardA11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      // Recharts puts SVG charts that might have minor text contrast or empty roles,
      // so we exclude SVG structures if they cause spurious a11y alerts.
      // But standard elements must pass completely.
      .analyze();
    expect(dashboardA11y.violations).toEqual([]);
  });
});
