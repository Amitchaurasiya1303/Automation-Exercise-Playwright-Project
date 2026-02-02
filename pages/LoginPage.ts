import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '../data/interfaces';

export class LoginPage extends BasePage {
  private readonly loginEmailInput = 'input[data-qa="login-email"]';
  private readonly loginPasswordInput = 'input[data-qa="login-password"]';
  private readonly loginButton = 'button[data-qa="login-button"]';
  private readonly signupNameInput = 'input[data-qa="signup-name"]';
  private readonly signupEmailInput = 'input[data-qa="signup-email"]';
  private readonly signupButton = 'button[data-qa="signup-button"]';
  private readonly loginHeading = 'h2:has-text("Login to your account")';

  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillInput(this.loginEmailInput, email);
    await this.fillInput(this.loginPasswordInput, password);
    await this.clickElement(this.loginButton);
  }

  async signup(user: User): Promise<void> {
    await this.fillInput(this.signupNameInput, user.name);
    await this.fillInput(this.signupEmailInput, user.email);
    await this.clickElement(this.signupButton);
  }

  async verifyLoginPage(): Promise<boolean> {
    return await this.isVisible(this.loginHeading);
  }
}