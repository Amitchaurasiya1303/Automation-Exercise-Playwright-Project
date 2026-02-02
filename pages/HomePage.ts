import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly signupLoginLink = 'a[href="/login"]';
  private readonly productsLink = 'a[href="/products"]';
  private readonly cartLink = 'a[href="/view_cart"]';
  private readonly loggedInText = 'text=Logged in as';

  constructor(page: Page) {
    super(page);
  }

  async navigateToSignupLogin(): Promise<void> {
    await this.clickElement(this.signupLoginLink);
  }

  async navigateToProducts(): Promise<void> {
    await this.clickElement(this.productsLink);
  }

  async navigateToCart(): Promise<void> {
    await this.clickElement(this.cartLink);
  }

  async isUserLoggedIn(): Promise<boolean> {
    return await this.isVisible(this.loggedInText);
  }

  async verifyHomePage(): Promise<boolean> {
    const title = await this.getTitle();
    return title.includes('Automation Exercise');
  }
}