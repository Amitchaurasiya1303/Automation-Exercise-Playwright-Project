import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private readonly commentTextarea = 'textarea[name="message"]';
  private readonly placeOrderButton = 'a:has-text("Place Order")';
  private readonly deliveryAddress = '.address_details';
  private readonly billingAddress = '.address_details';

  constructor(page: Page) {
    super(page);
  }

  async addComment(comment: string): Promise<void> {
    await this.fillInput(this.commentTextarea, comment);
  }

  async placeOrder(): Promise<void> {
    await this.clickElement(this.placeOrderButton);
  }

  async verifyCheckoutPage(): Promise<boolean> {
    return await this.isVisible(this.deliveryAddress);
  }
}