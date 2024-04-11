import { expect, type Locator, type Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly dashboardHeader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' })
      }
      async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      }
    
      async performLogin() {
        await this.usernameField.fill("Admin");
        await this.passwordField.fill("admin123");
        await this.loginButton.click();
        
      }
      async verifySuccessLogin(){
        await expect(this.dashboardHeader).toBeVisible();
      }
}