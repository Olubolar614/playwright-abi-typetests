import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/index.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvuBlKsGwAIB0gIkZWVlODAwMGYtMmY5ZS00MGFkLTllY2MtZjgwOWI0NjBkZDcz2AIG4AIB&sid=88cd7c00ba42f81acc69261921e874aa&keep_landing=1&sb_price_type=total&');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByTestId('header-xpb').getByRole('link', { name: 'Flights' }).click();
  await page.getByRole('button', { name: 'Where to?' }).click();
  await page.getByPlaceholder('Airport or city').fill('new yo');
  await page.getByText('JFK John F. Kennedy').click();
  await page.getByRole('button', { name: 'Sat 30 Dec - Sat 6 Jan' }).click();
  await page.getByLabel('18 December').click();
  await page.getByLabel('28 December').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.goto('https://flights.booking.com/flights/LON.CITY-JFK.AIRPORT/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&children=&from=LON.CITY&to=JFK.AIRPORT&fromCountry=GB&toCountry=US&fromLocationName=London&toLocationName=John+F.+Kennedy+International+Airport&depart=2023-12-18&return=2023-12-28&sort=BEST&travelPurpose=leisure&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvuBlKsGwAIB0gIkZWVlODAwMGYtMmY5ZS00MGFkLTllY2MtZjgwOWI0NjBkZDcz2AIG4AIB');
  await page.locator('#flight-card-0').getByTestId('flight_card_carrier_0').click();
});