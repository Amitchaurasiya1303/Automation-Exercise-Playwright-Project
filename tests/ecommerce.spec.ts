import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';
import { testUser, testProduct, testPayment } from '../data/testData';
import { TestHelpers } from '../utils/TestHelpers';

test.describe('E-Commerce Automation Tests', () => {
  
  test('Complete E-Commerce Flow - Login to Order Success', async ({ page }) => {
    // Initialize page objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    // Navigate to home page
    await page.goto('/');
    expect(await homePage.verifyHomePage()).toBeTruthy();

    // Navigate to login page
    await homePage.navigateToSignupLogin();
    expect(await loginPage.verifyLoginPage()).toBeTruthy();

    // Login with existing user
    await loginPage.login(testUser.email, testUser.password);
    await TestHelpers.waitForPageLoad(page);
    expect(await homePage.isUserLoggedIn()).toBeTruthy();

    // Search for product
    await productsPage.searchProduct(testProduct.name);
    expect(await productsPage.verifySearchResults()).toBeTruthy();

    // View product details and add to cart
    await productsPage.viewProductDetails();
    await productsPage.addToCart();
    await page.waitForTimeout(2000);
    await productsPage.viewCart();

    // Verify cart and proceed to checkout
    expect(await cartPage.verifyCartPage()).toBeTruthy();
    expect(await cartPage.hasItems()).toBeTruthy();
    await cartPage.proceedToCheckout();

    // Add comment and place order
    expect(await checkoutPage.verifyCheckoutPage()).toBeTruthy();
    await checkoutPage.addComment('Automated test order - TypeScript Playwright');
    await checkoutPage.placeOrder();

    // Fill payment details and confirm
    await paymentPage.fillPaymentDetails(testPayment);
    await paymentPage.confirmPayment();

    // Verify order success
    await page.waitForTimeout(3000);
    expect(await orderConfirmationPage.verifyOrderSuccess()).toBeTruthy();
    
    const successMessage = await orderConfirmationPage.getSuccessMessage();
    expect(successMessage).toContain('Congratulations');

    console.log('Complete E-Commerce flow completed successfully!');
  });

  test('Product Search and View Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await page.goto('/');
    expect(await homePage.verifyHomePage()).toBeTruthy();

    // Navigate to products page
    await homePage.navigateToProducts();
    
    // Search for product
    await productsPage.searchProduct(testProduct.name);
    expect(await productsPage.verifySearchResults()).toBeTruthy();

    console.log('Product search test completed successfully!');
  });

  test('User Login Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    
    // Navigate to login page
    await homePage.navigateToSignupLogin();
    expect(await loginPage.verifyLoginPage()).toBeTruthy();

    // Login with test user
    await loginPage.login(testUser.email, testUser.password);
    await TestHelpers.waitForPageLoad(page);
    
    // Verify login success
    expect(await homePage.isUserLoggedIn()).toBeTruthy();

    console.log('User login test completed successfully!');
  });
});