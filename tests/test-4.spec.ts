import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AoPxk6sGwAIB0gIkMjhmMDMwYzktZmU2Ni00YTFmLWFiZmYtNWQxNzVjOWJiMjMz2AIF4AIB&sid=4bc2b824bcacbf338bc594eb84ffbe74&keep_landing=1&sb_price_type=total&');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByPlaceholder('Where are you going?').click();
  await page.getByPlaceholder('Where are you going?').fill('new');
  await page.getByRole('button', { name: 'New York New York State,' }).click();
  await page.getByLabel('18 December').click();
  await page.getByLabel('28 December').click();
  await page.getByTestId('occupancy-config').click();
  await page.locator('div').filter({ hasText: /^2$/ }).locator('button').first().click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByLabel('Dismiss sign in information.').click();
  //await expect(page.locator('[data-testid="title"]')).toHaveText('HI New York City Hostel');
  //await expect(page.locator('[data-testid="title"]')).toHaveText('HI New York City Hostel');
  await expect(page.getByRole('link', { name: 'HI New York City Hostel Opens' })).toBeVisible();
  //await expect(page.locator('[data-testid="title"]', { name: 'HI New York City Hostel' })).toBeVisible();
});