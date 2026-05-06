// spec: specs/registration.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Registration Form Validation Tests', () => {
  test('Empty Fields Validation', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    // 2. Leave all fields empty and click Register
    await page.getByRole('button', { name: 'Register' }).click();

    // 3. Verify error messages for each mandatory field
    await expect(page.getByText('First name is required.')).toBeVisible();
    await expect(page.getByText('Last name is required.')).toBeVisible();
    await expect(page.getByText('Address is required.')).toBeVisible();
    await expect(page.getByText('City is required.')).toBeVisible();
    await expect(page.getByText('State is required.')).toBeVisible();
    await expect(page.getByText('Zip Code is required.')).toBeVisible();
    await expect(page.getByText('Social Security Number is required.')).toBeVisible();
    await expect(page.getByText('Username is required.')).toBeVisible();
    await expect(page.getByText('Password is required.')).toBeVisible();
    await expect(page.getByText('Password confirmation is required.')).toBeVisible();
  });
});
