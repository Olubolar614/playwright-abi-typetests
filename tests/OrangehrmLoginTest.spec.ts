import { test} from '@playwright/test';
import { LoginPage } from '../pageObjects/OrangeHrmPages/LoginPage/LoginPage';
test('verify that user is successfully login on Orangehrm with valid credientiely', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin();
    await loginPage.verifySuccessLogin();
  });

 

 