import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly proceedToCheckoutButton = 'a:has-text("Proceed To Checkout")';
  private readonly cartTable = '.cart_info';
  private readonly cartItems = '.cart_info_table tbody tr';

  constructor(page: Page) {
    super(page);
  }

  async proceedToCheckout(): Promise<void> {
    await this.clickElement(this.proceedToCheckoutButton);
  }

  async verifyCartPage(): Promise<boolean> {
    return await this.isVisible(this.cartTable);
  }

  async hasItems(): Promise<boolean> {
    const items = await this.page.locator(this.cartItems);
    return await items.count() > 0;
  }
}