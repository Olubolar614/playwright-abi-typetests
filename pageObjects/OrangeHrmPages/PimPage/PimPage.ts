import { expect, type Locator, type Page } from "@playwright/test";
export class PimPage {
  readonly page: Page;
  readonly pimElement : Locator;
  readonly firstNameField : Locator;
  readonly lastNameField : Locator;
  readonly employeeIdField : Locator;
  readonly saveButton : Locator;
  readonly addEmployeeButton : Locator;
  readonly searchEmployeeName :Locator;
  readonly searchEmployeeId : Locator;
  readonly searchButton : Locator;
  readonly deleteButton : Locator;
  readonly confirmDeleteButton : Locator;
  constructor(page: Page) {
    this.page = page;
    this.pimElement = page.getByRole('link', { name: 'PIM' });
    this.addEmployeeButton =page.locator('button.oxd-button.oxd-button--medium.oxd-button--secondary').last();
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.employeeIdField = page.locator('form').getByRole('textbox').nth(4);
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.searchEmployeeName = page.getByPlaceholder('Type for hints...').first();
    this.searchEmployeeId = page.getByRole('textbox').nth(2);
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.deleteButton = page.locator("button.oxd-icon-button .oxd-icon.bi-trash").first();
    this.confirmDeleteButton = page.locator(".oxd-button--label-danger");
  }
  async createNewEmployee(page:Page) {
    await this.pimElement.click();
    await page.waitForLoadState('domcontentloaded');
    await this.addEmployeeButton.click();
    await page.waitForLoadState('domcontentloaded');
    await this.firstNameField.fill("Humayun");
    await this.lastNameField.fill("Mushtaq");
    await this.employeeIdField.fill("332584");
    await this.saveButton.click();
    await page.waitForTimeout(10000);
  }
  async searchEmployee(page:Page){
    await page.waitForLoadState('domcontentloaded');
    await this.pimElement.click();
    await page.waitForLoadState('domcontentloaded');
    await this.searchEmployeeId.fill("332584");
    await this.searchButton.click();
    await page.waitForTimeout(10000);
  }
  async deleteEmployee(){
    await this.deleteButton.click();
    await this.confirmDeleteButton.click();
  }
  async editEmployee(){
    await this.firstNameField.clear();
    await this.firstNameField.fill("Tester123");
    await this.saveButton.first().click();
  }
}
