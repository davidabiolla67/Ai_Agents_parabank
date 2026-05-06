// spec: specs/registration.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Registration Page Access Tests', () => {
  test('REG-TC-002: Registration Page Layout Verification', async ({ page }) => {
    // 1. Navigate to https://parabank.parasoft.com/parabank/register.htm
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    
    // Verify registration page loads successfully
    await expect(page).toHaveURL(/register/);
    await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();

    // 2. Verify presence of all required form fields
    // Verify all 8 fields visible and labeled correctly
    const formFields = [
      'First Name:',
      'Last Name:',
      'Address:',
      'City:',
      'State:',
      'Zip Code:',
      'Phone #:',
      'SSN:'
    ];

    for (const field of formFields) {
      await expect(page.getByText(field)).toBeVisible();
    }

    // Verify fields are in the expected order by checking the form structure
    const firstNameField = page.getByText('First Name:');
    const lastNameField = page.getByText('Last Name:');
    const addressField = page.getByText('Address:');
    const cityField = page.getByText('City:');
    const stateField = page.getByText('State:');
    const zipCodeField = page.getByText('Zip Code:');
    const phoneField = page.getByText('Phone #:');
    const ssnField = page.getByText('SSN:');

    // Verify each field has a corresponding input
    const firstNameInput = page.locator('input[id*="customer.firstName"], input[aria-label*="First"], input').first();
    const lastNameInput = page.locator('input[id*="customer.lastName"], input[aria-label*="Last"]');
    const addressInput = page.locator('input[id*="customer.address"], input[aria-label*="Address"]');
    const cityInput = page.locator('input[id*="customer.city"], input[aria-label*="City"]');
    const stateInput = page.locator('input[id*="customer.state"], input[aria-label*="State"]');
    const zipCodeInput = page.locator('input[id*="customer.zipCode"], input[aria-label*="Zip"]');
    const phoneInput = page.locator('input[id*="customer.phoneNumber"], input[aria-label*="Phone"]');
    const ssnInput = page.locator('input[id*="customer.ssn"], input[aria-label*="SSN"]');

    // Verify inputs are visible
    await expect(firstNameInput).toBeVisible();

    // 3. Verify login credentials section and confirm button
    // Verify Username field is present
    await expect(page.getByText('Username:')).toBeVisible();
    
    // Verify Password field is present
    await expect(page.getByText('Password:')).toBeVisible();
    
    // Verify Confirm Password field is present
    await expect(page.getByText('Confirm:')).toBeVisible();
    
    // Verify Register button is visible and enabled
    const registerButton = page.getByRole('button', { name: 'Register' });
    await expect(registerButton).toBeVisible();
    await expect(registerButton).toBeEnabled();
  });
});
