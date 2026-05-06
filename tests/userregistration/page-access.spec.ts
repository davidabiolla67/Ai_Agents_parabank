// spec: specs/registration.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Registration Page Access Tests', () => {
  test('REG-TC-001: Access Registration Page from Home Link', async ({ page }) => {
    // 1. Navigate to https://parabank.parasoft.com/parabank
    await page.goto('https://parabank.parasoft.com/parabank');
    
    // Verify home page loads successfully
    await expect(page).toHaveTitle(/ParaBank/);
    
    // Verify Register link is visible in navigation menu
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

    // 2. Click on the 'Register' link in the navigation menu
    await page.getByRole('link', { name: 'Register' }).click();
    
    // Verify user is redirected to the registration page
    await expect(page).toHaveURL(/register/);
    
    // Verify registration form is fully loaded
    await expect(page.getByRole('button', { name: 'Submit Form' })).toBeVisible();

    // 3. Verify the page title and heading
    // Verify page title is 'Register' or contains 'Registration'
    await expect(page).toHaveTitle(/User Registration Form/);
    
    // Verify heading displays 'Register Your Account'
    await expect(page.getByRole('heading', { name: 'Register Your Account' })).toBeVisible();
    
    // Verify form title 'Your Registration' context (evident from the form structure)
    // Verify all form fields are present on the registration page
    await expect(page.getByText('First Name:')).toBeVisible();
    await expect(page.getByText('Last Name:')).toBeVisible();
    await expect(page.getByText('Address:')).toBeVisible();
  });
});
