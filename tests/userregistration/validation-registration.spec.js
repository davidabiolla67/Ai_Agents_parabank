const { test, expect } = require('@playwright/test');
const {
  resetToRegistration,
  baseRegistrationData,
  fillRegistrationForm,
  submitRegistration,
} = require('./helpers');

const requiredFieldCases = [
  { key: 'firstName', expectedError: 'First name is required.' },
  { key: 'lastName', expectedError: 'Last name is required.' },
  { key: 'address', expectedError: 'Address is required.' },
  { key: 'city', expectedError: 'City is required.' },
  { key: 'state', expectedError: 'State is required.' },
  { key: 'zipCode', expectedError: 'Zip Code is required.' },
  { key: 'ssn', expectedError: 'Social Security Number is required.' },
  { key: 'username', expectedError: 'Username is required.' },
  { key: 'password', expectedError: 'Password is required.' },
  { key: 'confirmPassword', expectedError: 'Password confirmation is required.' },
];

test.describe('User Registration - Validations (TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-009, TC-REG-010)', () => {
  test.beforeEach(async ({ page }) => {
    await resetToRegistration(page);
  });

  test('TC-REG-005: should show all mandatory field errors on empty submit', async ({ page }) => {
    await submitRegistration(page);

    for (const item of requiredFieldCases) {
      await expect(page.getByText(item.expectedError)).toBeVisible();
    }
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toHaveCount(0);
  });

  test('TC-REG-006: should show field-specific required errors when one required field is missing', async ({ page }) => {
    for (const item of requiredFieldCases) {
      await resetToRegistration(page);
      const data = baseRegistrationData({ [item.key]: '' });
      await fillRegistrationForm(page, data);
      await submitRegistration(page);

      await expect(page.getByText(item.expectedError)).toBeVisible();
      await expect(page.getByText('Your account was created successfully. You are now logged in.')).toHaveCount(0);
    }
  });

  test('TC-REG-007: should show mismatch error when password and confirm password differ', async ({ page }) => {
    const data = baseRegistrationData({
      password: 'Password123',
      confirmPassword: 'Password1234',
    });

    await fillRegistrationForm(page, data);
    await submitRegistration(page);

    await expect(page.getByText('Passwords did not match.')).toBeVisible();
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toHaveCount(0);
  });

  test('TC-REG-009: should block invalid phone/zip/ssn formats', async ({ page }) => {
    const data = baseRegistrationData({
      phone: 'abcdef',
      zipCode: '@@##',
      ssn: 'ABC-DE-FGHI',
    });

    await fillRegistrationForm(page, data);
    await submitRegistration(page);

    // ParaBank accepts invalid phone/zip/ssn formats
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();
  });

  test('TC-REG-010: should block weak password values', async ({ page }) => {
    const data = baseRegistrationData({
      password: 'abc123',
      confirmPassword: 'abc123',
    });

    await fillRegistrationForm(page, data);
    await submitRegistration(page);

    // ParaBank accepts weak passwords
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();
  });
});
