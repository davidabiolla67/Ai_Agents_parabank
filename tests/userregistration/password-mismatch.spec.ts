// spec: specs/registration.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Registration Form Validation Tests', () => {
  test('Password Mismatch Validation', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    // 2. Fill all required fields with valid data
    await page.locator('#customer\\.firstName').fill('John');
    await page.locator('#customer\\.lastName').fill('Doe');
    await page.locator('#customer\\.address\\.street').fill('123 Main St');
    await page.locator('#customer\\.address\\.city').fill('Toronto');
    await page.locator('#customer\\.address\\.state').fill('ON');
    await page.locator('#customer\\.address\\.zipCode').fill('M1A1A1');
    await page.locator('#customer\\.phoneNumber').fill('1234567890');
    await page.locator('#customer\\.ssn').fill('123-45-6789');
    await page.locator('#customer\\.username').fill('testuser123');

    // 3. Enter Password: 'Password123', Confirm Password: 'DifferentPassword'
    await page.locator('#customer\\.password').fill('Password123');
    await page.locator('#repeatedPassword').fill('DifferentPassword');

    // 4. Click Register
    await page.getByRole('button', { name: 'Register' }).click();

    // Form shows password mismatch error, registration is not completed
    await expect(page.getByText('Passwords did not match.')).toBeVisible();
  });
});
