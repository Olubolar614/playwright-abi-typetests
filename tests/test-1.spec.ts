import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AqPmk6sGwAIB0gIkNzc5YjhkOTQtZGQ4MS00ZDEyLWE0YjAtM2NkM2I2NzY3ZDhh2AIF4AIB&sid=76dd93a9fa8768af80d73463e7193dbb&keep_landing=1&sb_price_type=total&');
  await page.getByPlaceholder('Where are you going?').click();
  await page.getByPlaceholder('Where are you going?').press('CapsLock');
  await page.getByPlaceholder('Where are you going?').fill('Ne');
  await page.getByRole('button', { name: 'New York New York State,' }).click();
  await page.getByTestId('date-display-field-start').click();
  await page.getByTestId('searchbox-dates-container').locator('svg').click();
  await page.getByLabel('18 December').click();
  await page.getByText('7 days').click();
  await page.getByLabel('18 December').click();
  await page.getByTestId('date-display-field-end').click();
  await page.getByTestId('date-display-field-end').click();
  await page.getByLabel('19 December').click();
  await page.getByLabel('27 December').click();
  await page.locator('#bodyconstraint-inner').click();
  await page.getByTestId('occupancy-config').click();
  await page.locator('div').filter({ hasText: /^2$/ }).locator('button').first().click();
  await page.getByRole('button', { name: 'Search' }).click();
});