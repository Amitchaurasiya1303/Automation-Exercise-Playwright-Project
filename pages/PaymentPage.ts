import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Payment } from '../data/interfaces';

export class PaymentPage extends BasePage {
  private readonly nameOnCardInput = 'input[data-qa="name-on-card"]';
  private readonly cardNumberInput = 'input[data-qa="card-number"]';
  private readonly cvcInput = 'input[data-qa="cvc"]';
  private readonly expiryMonthInput = 'input[data-qa="expiry-month"]';
  private readonly expiryYearInput = 'input[data-qa="expiry-year"]';
  private readonly payButton = 'button[data-qa="pay-button"]';

  constructor(page: Page) {
    super(page);
  }

  async fillPaymentDetails(payment: Payment): Promise<void> {
    await this.fillInput(this.nameOnCardInput, payment.nameOnCard);
    await this.fillInput(this.cardNumberInput, payment.cardNumber);
    await this.fillInput(this.cvcInput, payment.cvc);
    await this.fillInput(this.expiryMonthInput, payment.expiryMonth);
    await this.fillInput(this.expiryYearInput, payment.expiryYear);
  }

  async confirmPayment(): Promise<void> {
    await this.clickElement(this.payButton);
  }
}