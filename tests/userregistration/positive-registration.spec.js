const { test, expect } = require('@playwright/test');
const {
  resetToRegistration,
  baseRegistrationData,
  fillRegistrationForm,
  submitRegistration,
} = require('./helpers');

test.describe('User Registration - Positive Flow (TC-REG-003, TC-REG-004)', () => {
  test.beforeEach(async ({ page }) => {
    await resetToRegistration(page);
  });

  test('TC-REG-003 and TC-REG-004: should register successfully and show logged-in state', async ({ page }) => {
    const data = baseRegistrationData();

    await fillRegistrationForm(page, data);
    await submitRegistration(page);

    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();
    await expect(page.getByRole('heading', { name: `Welcome ${data.username}` })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Accounts Overview' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  });
});
