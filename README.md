# E-Commerce Automation Testing with Playwright & TypeScript

## Overview
Complete end-to-end automation testing for https://automationexercise.com using Playwright and TypeScript with Page Object Model (POM) design pattern. Features user authentication, product search, cart management, checkout flow, payment processing, and order confirmation with comprehensive reporting.

## Project Structure
```
Automation-Exercise-Playwright-Project/
├── data/
│   ├── interfaces.ts              # TypeScript interfaces
│   └── testData.ts                # Test data objects
├── pages/
│   ├── BasePage.ts                # Base page class
│   ├── HomePage.ts                # Home page object
│   ├── LoginPage.ts               # Login/Signup page object
│   ├── ProductsPage.ts            # Products page object
│   ├── CartPage.ts                # Cart page object
│   ├── CheckoutPage.ts            # Checkout page object
│   ├── PaymentPage.ts             # Payment page object
│   └── OrderConfirmationPage.ts   # Order confirmation page object
├── tests/
│   └── ecommerce.spec.ts          # Main test specifications
├── utils/
│   └── TestHelpers.ts             # Utility functions
├── playwright-report/             # HTML reports
├── test-results/                  # Test results and artifacts
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## Key Features

### 🔧 Core Functionality:
- **Page Object Model**: Clean, maintainable code architecture
- **TypeScript Support**: Full type safety and IntelliSense
- **Smart User Authentication**: Handles login functionality
- **Robust Product Search**: Enhanced search with validation
- **Complete Checkout Flow**: End-to-end order placement
- **Payment Processing**: Secure payment form handling
- **Order Confirmation**: Comprehensive success verification

### 🆕 Advanced Features:
- **Cross-Browser Testing**: Chrome, Firefox, Safari support
- **Parallel Execution**: Fast test execution with workers
- **Rich HTML Reports**: Interactive reports with screenshots
- **Auto Screenshots & Videos**: Capture failures automatically
- **Reusable Components**: Modular page objects and utilities
- **Type-Safe Data**: Strongly typed test data interfaces

## Test Data

### User Information:
- **Name**: Amit Chaurasiya
- **Email**: amit798dps6@test.com
- **Password**: Test@123
- **Address**: Mumbai Street 1, Mumbai, Maharashtra, India, 400001
- **Phone**: 9876543210

### Product Data:
- **Product**: Blue Top
- **Category**: Women > Tops
- **Brand**: Polo
- **Price**: ₹500

### Payment Details:
- **Card Holder**: Amit Chaurasiya
- **Card Number**: 4242424242424242
- **CVC**: 123
- **Expiry**: 12/2027

## Test Cases

### Main Test Flows:
1. **Complete E-Commerce Flow**: Full user journey from login to order confirmation
2. **Product Search and View**: Search functionality and product viewing
3. **User Login Test**: Authentication verification

## How to Run Tests

### Prerequisites:
- Node.js 18 or higher
- npm or yarn package manager

### Installation:
```bash
# Clone repository
git clone https://github.com/Amitchaurasiya1303/Automation-Exercise-Playwright-Project.git
cd Automation-Exercise-Playwright-Project

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

### Execution Options:

#### Option 1: Run All Tests
```bash
npm test
```

#### Option 2: Run Tests with UI (Headed Mode)
```bash
npm run test:headed
```

#### Option 3: Debug Mode
```bash
npm run test:debug
```

#### Option 4: Interactive UI Mode
```bash
npm run test:ui
```

#### Option 5: Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

#### Option 6: Specific Test File
```bash
npx playwright test tests/ecommerce.spec.ts
```

## Test Execution Flow

### Complete E-Commerce Flow:
```
🏠 Home → 🔐 Login → 🛍️ Search → 👁️ View Product → 🛒 Add to Cart → 💳 Checkout → 💰 Payment → ✅ Success
```

### Key Benefits:
- ✅ Type-safe development with TypeScript
- ✅ Maintainable Page Object Model architecture
- ✅ Cross-browser compatibility testing
- ✅ Automatic retry on failures
- ✅ Rich HTML reports with screenshots
- ✅ Parallel test execution for speed
- ✅ Reusable components and utilities

## Reports

### HTML Reports:
- **Location**: `playwright-report/index.html`
- **Features**: Interactive reports, screenshots, videos, traces
- **Command**: `npm run report`

### JSON Reports:
- **Location**: `test-results/results.json`
- **Format**: Structured data for CI/CD integration

### JUnit Reports:
- **Location**: `test-results/junit.xml`
- **Format**: XML format for CI/CD systems

## Configuration

### Browser Settings:
- **Default**: Chromium, Firefox, WebKit
- **Configurable**: Via `playwright.config.ts`

### Test Settings:
- **Parallel**: Enabled for faster execution
- **Retries**: 2 retries in CI, 0 locally
- **Screenshots**: On failure only
- **Videos**: Retained on failure
- **Traces**: On first retry

## Page Object Model Structure

### BasePage Class:
- Common functionality for all pages
- Element interaction methods
- Wait strategies

### Specific Page Classes:
- **HomePage**: Navigation and user status
- **LoginPage**: Authentication functionality
- **ProductsPage**: Product search and selection
- **CartPage**: Cart management
- **CheckoutPage**: Order review and placement
- **PaymentPage**: Payment processing
- **OrderConfirmationPage**: Success verification

## TypeScript Interfaces

### User Interface:
```typescript
interface User {
  name: string;
  email: string;
  password: string;
  // ... other properties
}
```

### Product Interface:
```typescript
interface Product {
  name: string;
  category: string;
  brand: string;
  price: string;
}
```

### Payment Interface:
```typescript
interface Payment {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}
```

## Utilities

### TestHelpers Class:
- Page load waiting
- Screenshot capture
- Random data generation
- Element scrolling
- Enhanced click methods

## Troubleshooting

### Common Issues:

1. **Browser Installation**:
   ```bash
   npx playwright install
   ```

2. **TypeScript Compilation**:
   ```bash
   npm run build
   ```

3. **Test Failures**:
   - Check HTML report for detailed logs
   - Review screenshots and videos
   - Verify website accessibility
   - Check network conditions

4. **Path Resolution**:
   - Ensure TypeScript paths are configured correctly
   - Check tsconfig.json baseUrl and paths

## VS Code Setup

### Required Extensions:
- Playwright Test for VSCode
- TypeScript and JavaScript Language Features
- TypeScript Hero (optional)

### Running Tests:
1. Install Playwright extension
2. Use Test Explorer panel
3. Run/Debug individual tests
4. View results inline with rich debugging

## CI/CD Integration

### GitHub Actions Example:
```yaml
- name: Install dependencies
  run: npm ci
- name: Install Playwright browsers
  run: npx playwright install --with-deps
- name: Run Playwright tests
  run: npm test
```

## Success Criteria

The automation verifies:
✅ User authentication functionality
✅ Product search and selection
✅ Cart management and navigation
✅ Checkout process completion
✅ Payment form processing
✅ Order confirmation with success message
✅ Cross-browser compatibility
✅ Type safety throughout the codebase

## Technical Stack

- **Language**: TypeScript 5.0+
- **Framework**: Playwright 1.40+
- **Testing**: @playwright/test
- **Architecture**: Page Object Model
- **Browsers**: Chromium, Firefox, WebKit
- **Reports**: HTML, JSON, JUnit
- **CI/CD**: GitHub Actions ready

## Best Practices Implemented

1. **Page Object Model**: Separation of concerns
2. **TypeScript**: Type safety and better IDE support
3. **Async/Await**: Modern JavaScript patterns
4. **Error Handling**: Robust error management
5. **Reusable Components**: DRY principle
6. **Clear Naming**: Self-documenting code
7. **Comprehensive Reporting**: Detailed test results

## Author

**Amit Chaurasiya**
- GitHub: [Amitchaurasiya1303](https://github.com/Amitchaurasiya1303)
- Project: Automation Exercise Playwright TypeScript

## License

This project is open source and available under the [MIT License](LICENSE).