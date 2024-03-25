import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AoO9lqsGwAIB0gIkMTFkZDZhYjctOGY4Yi00YTBiLThhZmUtYjExNDBkODNlOTM32AIF4AIB&sid=166048ec9c9f698a0fc537887ec1174c&keep_landing=1&sb_price_type=total&');
  await page.getByTestId('header-sign-in-button').click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('gbadebo.abiola@gmail.com');
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByPlaceholder('Enter your password').press('CapsLock');
  await page.getByPlaceholder('Enter your password').fill('Feg73xi');
  await page.getByPlaceholder('Enter your password').press('CapsLock');
  await page.getByPlaceholder('Enter your password').fill('Feg73xiP6qrd');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.frameLocator('iframe[src="https\\:\\/\\/account\\.booking\\.com\\/sign-in\\/password\\?op_token\\=EgVvYXV0aCKuBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qzQRVcG9ESlZ5QXYySXdMeVRJNUNPRXpLTWZ0OFhlN2RZSTM2dDZCaHI5LVI2ZWN6WWY1M0Q2dFNvWFNXWW9Mc3JZem00M1J1cW1QbTk4LXRKWnloaVYyaTVWZ1JPNXdoNTNqZXJaRTVYcWtzMFYzV1REcTBQcGp5cmE0NlRjTTh3Rm5rWkM5bUVLNVc0RDlFSUl4WFp2VkZNSmxHamc2aUVuaHRlbERYdVhicGM4ZE52bmlUWndRUHJ0ZXVVcVBHLWlhMXhHY2IwV1pwdkc2OUZyMU1lQjI1cGFIcFV5MTBGM3p6SkxzU3M0UllHbzVOR2E5Mm4xTWJxWTdjRFN6Z1BiNVh1RUhIa0RYcmU5Q0V5bDRicnB5X1ZKZlFKd0htOEhNYVIyVmhqQkxZbHNDdFJRODE2bVVBZnNwTVptZnNBZ0YtaGhDSG01RjdIRXB1cHI4RFJ6ZWk3cFRJeVQwT3RkN2c5NEVXNUNUX25aQ2V4LWFlWmxWdDJyUHRDMWRDeUwtd0RfeFRoT2pKRGE5S1ZtU3dUNG9ZU0dTa2NIamg0Q2ROS080b2FrZjl5ZzNDT1VjVTYtcEkwTXVKY09lSy05WkgzMGpPUDR0MWwzQ3BCMnh6c285TWY3ajduMnNrbDlJV0V0RlFEUDh6djl2TS10Z28wT3pRZGdzS0hlRko0NXBWbHNiOHBodDk5LU5TUk85VlgyMENzdE1WMjBfN2I4Q082RDV6QT0qZXlKcFpDSTZJblJ5WVhabGJHeGxjbDlvWldGa1pYSWlmUT09QgRjb2RlKjEIjsgSMN7149Sf1yY6AEIAWIm9lqsGkgEQdHJhdmVsbGVyX2hlYWRlcpoBBWluZGV4"]').getByRole('button', { name: 'Press and hold' }).click();
});