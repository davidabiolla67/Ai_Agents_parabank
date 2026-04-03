const { test, expect } = require('@playwright/test');
const { HOME_URL, resetToRegistration } = require('./helpers');

test.describe('User Registration - UI Navigation (TC-REG-001, TC-REG-002)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME_URL);
  });

  test('TC-REG-001: should navigate to registration page from homepage', async ({ page }) => {
    await expect(page).toHaveURL(/index\.htm/);
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

    await page.getByRole('link', { name: 'Register' }).click();

    await expect(page).toHaveURL(/register\.htm/);
    await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
  });

  test('TC-REG-002: should display all registration form UI elements', async ({ page }) => {
    await resetToRegistration(page);

    await expect(page.locator('#customer\\.firstName')).toBeVisible();
    await expect(page.locator('#customer\\.lastName')).toBeVisible();
    await expect(page.locator('#customer\\.address\\.street')).toBeVisible();
    await expect(page.locator('#customer\\.address\\.city')).toBeVisible();
    await expect(page.locator('#customer\\.address\\.state')).toBeVisible();
    await expect(page.locator('#customer\\.address\\.zipCode')).toBeVisible();
    await expect(page.locator('#customer\\.phoneNumber')).toBeVisible();
    await expect(page.locator('#customer\\.ssn')).toBeVisible();
    await expect(page.locator('#customer\\.username')).toBeVisible();
    await expect(page.locator('#customer\\.password')).toBeVisible();
    await expect(page.locator('#repeatedPassword')).toBeVisible();

    const registerButton = page.getByRole('button', { name: 'Register' });
    await expect(registerButton).toBeVisible();
    await expect(registerButton).toBeEnabled();

    await expect(page.getByText('If you have an account with us you can sign-up for free instant online access.')).toBeVisible();
  });
});
