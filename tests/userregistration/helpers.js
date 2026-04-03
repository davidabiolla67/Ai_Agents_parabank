const BASE_URL = 'https://parabank.parasoft.com/parabank';
const HOME_URL = `${BASE_URL}/index.htm`;
const REGISTER_URL = `${BASE_URL}/register.htm`;
const LOGOUT_URL = `${BASE_URL}/logout.htm`;

function uniqueUsername(prefix = 'reguser') {
  const seed = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  return `${seed}${prefix.slice(0, 2)}`.replace(/[^a-zA-Z0-9]/g, '').slice(0, 30);
}

function baseRegistrationData(overrides = {}) {
  return {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'Toronto',
    state: 'ON',
    zipCode: 'M1A1A1',
    phone: '1234567890',
    ssn: '123-45-6789',
    username: uniqueUsername(),
    password: 'Password123',
    confirmPassword: 'Password123',
    ...overrides,
  };
}

async function resetToRegistration(page) {
  await page.goto(LOGOUT_URL);
  await page.goto(HOME_URL);
  await page.getByRole('link', { name: 'Register' }).click();
}

async function fillRegistrationForm(page, data) {
  await page.locator('#customer\\.firstName').fill(data.firstName);
  await page.locator('#customer\\.lastName').fill(data.lastName);
  await page.locator('#customer\\.address\\.street').fill(data.address);
  await page.locator('#customer\\.address\\.city').fill(data.city);
  await page.locator('#customer\\.address\\.state').fill(data.state);
  await page.locator('#customer\\.address\\.zipCode').fill(data.zipCode);
  await page.locator('#customer\\.phoneNumber').fill(data.phone);
  await page.locator('#customer\\.ssn').fill(data.ssn);
  await page.locator('#customer\\.username').fill(data.username);
  await page.locator('#customer\\.password').fill(data.password);
  await page.locator('#repeatedPassword').fill(data.confirmPassword);
}

async function submitRegistration(page) {
  await page.getByRole('button', { name: 'Register' }).click();
}

module.exports = {
  BASE_URL,
  HOME_URL,
  REGISTER_URL,
  LOGOUT_URL,
  uniqueUsername,
  baseRegistrationData,
  resetToRegistration,
  fillRegistrationForm,
  submitRegistration,
};
