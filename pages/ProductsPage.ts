import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private readonly searchInput = '#search_product';
  private readonly searchButton = '#submit_search';
  private readonly productInfo = '.productinfo';
  private readonly viewProductLink = 'a[href="/product_details/1"]';
  private readonly addToCartButton = 'button:has-text("Add to cart")';
  private readonly viewCartLink = 'a:has-text("View Cart")';

  constructor(page: Page) {
    super(page);
  }

  async searchProduct(productName: string): Promise<void> {
    await this.fillInput(this.searchInput, productName);
    await this.clickElement(this.searchButton);
  }

  async viewProductDetails(): Promise<void> {
    await this.clickElement(this.viewProductLink);
  }

  async addToCart(): Promise<void> {
    await this.clickElement(this.addToCartButton);
  }

  async viewCart(): Promise<void> {
    await this.clickElement(this.viewCartLink);
  }

  async verifySearchResults(): Promise<boolean> {
    return await this.isVisible(this.productInfo);
  }
}