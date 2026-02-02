import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderConfirmationPage extends BasePage {
  private readonly successMessage = 'text=Congratulations';
  private readonly orderPlacedMessage = 'text=Your order has been placed successfully';

  constructor(page: Page) {
    super(page);
  }

  async verifyOrderSuccess(): Promise<boolean> {
    return await this.isVisible(this.successMessage);
  }

  async getSuccessMessage(): Promise<string> {
    return await this.getText(this.successMessage);
  }
}