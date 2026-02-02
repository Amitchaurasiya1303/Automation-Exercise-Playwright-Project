import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }]
  ],
  use: {
    baseURL: 'https://automationexercise.com',
    trace: 'off',
    screenshot: 'on',
    video: 'off',
    headless: false,
    actionTimeout: 15000,
    navigationTimeout: 30000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});