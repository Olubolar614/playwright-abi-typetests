import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/index.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvuBlKsGwAIB0gIkZWVlODAwMGYtMmY5ZS00MGFkLTllY2MtZjgwOWI0NjBkZDcz2AIG4AIB&sid=ec3e7b5974c0789ba7b457a2cebcc4ce&aid=304142');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Car rentals' }).click();
  await page.getByTestId('sbc-fl-text-input__container').getByText('Pick-up location').click();
  await page.getByTestId('searchbox-toolbox-fts-pickup').fill('new york');
  await page.getByRole('button', { name: 'Airport New York - John F.' }).click();
  await page.getByTestId('searchbox-toolbox-date-picker-pickup-date').click();
  await page.getByLabel('18 December').click();
  await page.getByTestId('searchbox-toolbox-pickup-time').selectOption('11:00');
  await page.getByTestId('searchbox-toolbox-date-picker-dropoff-date').click();
  await page.getByLabel('27 December').click();
  await page.getByTestId('searchbox-toolbox-dropoff-time').selectOption('12:00');
  await page.getByTestId('searchbox-toolbox-submit-button').click();
});