import { Page } from '@playwright/test';

export class TestHelpers {
  static async waitForPageLoad(page: Page, timeout: number = 10000): Promise<void> {
    await page.waitForLoadState('networkidle', { timeout });
  }

  static async takeScreenshot(page: Page, name: string): Promise<void> {
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
  }

  static async scrollToElement(page: Page, selector: string): Promise<void> {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }

  static async waitAndClick(page: Page, selector: string, timeout: number = 10000): Promise<void> {
    await page.waitForSelector(selector, { timeout });
    await page.click(selector);
  }
}