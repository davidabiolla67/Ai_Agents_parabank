const { test, expect } = require('@playwright/test');
const {
  resetToRegistration,
  baseRegistrationData,
  fillRegistrationForm,
  submitRegistration,
} = require('./helpers');

test.describe('User Registration - Duplicate Username (TC-REG-008)', () => {
  test.beforeEach(async ({ page }) => {
    await resetToRegistration(page);
  });

  test('TC-REG-008: should show duplicate username error for existing username', async ({ page }) => {
    const firstUser = baseRegistrationData();
    await fillRegistrationForm(page, firstUser);
    await submitRegistration(page);

    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();

    await resetToRegistration(page);
    const secondUser = baseRegistrationData({ username: firstUser.username });

    await fillRegistrationForm(page, secondUser);
    await submitRegistration(page);

    await expect(page.getByText('This username already exists.')).toBeVisible();
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toHaveCount(0);
  });
});
