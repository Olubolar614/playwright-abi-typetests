import { test} from '@playwright/test';
import { LoginPage } from '../pageObjects/OrangeHrmPages/LoginPage/LoginPage';
import {PimPage} from '../pageObjects/OrangeHrmPages/PimPage/PimPage'
test('verify that employee is created, Search and Deleted Successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PimPage(page);
    await loginPage.goto();
    await loginPage.performLogin();
    await page.waitForLoadState('domcontentloaded');
    await pimPage.createNewEmployee(page);
    await pimPage.searchEmployee(page);
    await pimPage.deleteEmployee();
  });
  test('verify that employee is created, Edit and Deleted Successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PimPage(page);
    await loginPage.goto();
    await loginPage.performLogin();
    await page.waitForLoadState('domcontentloaded');
    await pimPage.createNewEmployee(page);
    await pimPage.editEmployee();
    await pimPage.searchEmployee(page);
    await pimPage.deleteEmployee();
  });