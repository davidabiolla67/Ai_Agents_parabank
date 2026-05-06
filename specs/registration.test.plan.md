# Parabank User Registration Test Plan (PARA-REG-001)

## Application Overview

This test plan provides comprehensive coverage for the Parabank User Registration feature (PARA-REG-001). The plan covers all acceptance criteria including registration page access, successful registration with valid data, field validation, username uniqueness, input format validation, and post-registration login flows. Test cases are organized by category and include happy path, negative, and edge case scenarios to ensure robust user registration functionality.

## Test Scenarios

### 1. Registration Page Access Tests

**Seed:** `seed.spec.ts`

#### 1.1. REG-TC-001: Access Registration Page from Home Link

**File:** `tests/registration/page-access.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank
    - expect: Home page loads successfully
    - expect: Register link is visible in navigation menu
  2. Click on the 'Register' link in the navigation menu
    - expect: User is redirected to the registration page
    - expect: Registration form is fully loaded
    - expect: URL contains 'register' or similar path
  3. Verify the page title and heading
    - expect: Page title is 'Register' or contains 'Registration'
    - expect: Heading displays 'Signing up is easy'or similar registration message
    - expect: Form title 'Your Registration' is visible

#### 1.2. REG-TC-002: Registration Page Layout Verification

**File:** `tests/registration/page-access.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/register.htm
    - expect: Registration page loads successfully
  2. Verify presence of all required form fields: First Name, Last Name, Address, City, State, Zip Code, Phone, SSN
    - expect: All 8 fields are visible and labeled correctly
    - expect: Fields are in the expected order
    - expect: Each field has a corresponding label or placeholder
  3. Verify presence of login credentials section and confirm button
    - expect: Username field is present
    - expect: Password field is present
    - expect: Confirm Password field is present
    - expect: Register button is visible and enabled

### 2. Successful Registration Tests (Happy Path)

**Seed:** `seed.spec.ts`

#### 2.1. REG-TC-003: Successful Registration with Valid Data

**File:** `tests/registration/happy-path.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/register.htm
    - expect: Registration page loads
  2. Enter First Name: 'John'
    - expect: First Name field populated with 'John'
    - expect: No error message displayed
  3. Enter Last Name: 'Doe'
    - expect: Last Name field populated with 'Doe'
    - expect: No error message displayed
  4. Enter Address: '123 Main Street'
    - expect: Address field populated with '123 Main Street'
    - expect: No error message displayed
  5. Enter City: 'Toronto'
    - expect: City field populated with 'Toronto'
    - expect: No error message displayed
  6. Enter State: 'ON'
    - expect: State field populated with 'ON'
    - expect: No error message displayed
  7. Enter Zip Code: 'M1A1A1'
    - expect: Zip Code field populated with 'M1A1A1'
    - expect: No error message displayed
  8. Enter Phone: '1234567890'
    - expect: Phone field populated with '1234567890'
    - expect: No error message displayed
  9. Enter SSN: '123-45-6789'
    - expect: SSN field populated with '123-45-6789'
    - expect: No error message displayed
  10. Enter Username: 'johndoe123'
    - expect: Username field populated with 'johndoe123'
    - expect: No error message displayed
  11. Enter Password: 'Password123'
    - expect: Password field populated (shown as dots/asterisks)
    - expect: No error message displayed
  12. Enter Confirm Password: 'Password123'
    - expect: Confirm Password field populated (shown as dots/asterisks)
    - expect: No error message displayed
  13. Click the 'Register' button
    - expect: Form is submitted successfully
    - expect: Success message is displayed (e.g., 'Your account was created successfully')
    - expect: User is either logged in automatically or redirected to login confirmation page
  14. Verify user is now logged in or can proceed to dashboard
    - expect: User sees account/dashboard page
    - expect: Username or welcome message displays the registered username
    - expect: User has access to banking features

#### 2.2. REG-TC-004: Successful Registration with Minimum Length Data

**File:** `tests/registration/happy-path.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Fill registration form with minimum valid data: First Name: 'J', Last Name: 'D', Address: '1 St', City: 'LA', State: 'CA', Zip: '12345', Phone: '0000000000', SSN: '000-00-0000', Username: 'user123', Password: 'Pass1234'
    - expect: All fields accept the input
    - expect: No validation errors appear immediately
  3. Submit the registration form
    - expect: Registration succeeds
    - expect: User is logged in or shown success message
    - expect: Account is created with minimum data

#### 2.3. REG-TC-005: Successful Registration with Special Characters in Address

**File:** `tests/registration/happy-path.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Fill registration with Address: '123 Maple Ave., Suite #4', and other valid data
    - expect: Address field accepts special characters (#, ., ,)
    - expect: No validation error for special characters in address
  3. Submit form with valid data including special characters
    - expect: Registration succeeds
    - expect: Special characters are preserved in saved address

### 3. Field Validation Tests (Negative)

**Seed:** `seed.spec.ts`

#### 3.1. REG-TC-006: Empty First Name Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave First Name field empty and fill all other required fields with valid data
    - expect: First Name field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near First Name field (e.g., 'First Name is required')
    - expect: User stays on registration page

#### 3.2. REG-TC-007: Empty Last Name Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Last Name field empty and fill all other required fields with valid data
    - expect: Last Name field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Last Name field
    - expect: User stays on registration page

#### 3.3. REG-TC-008: Empty Address Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Address field empty and fill all other required fields with valid data
    - expect: Address field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Address field
    - expect: User stays on registration page

#### 3.4. REG-TC-009: Empty City Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave City field empty and fill all other required fields with valid data
    - expect: City field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near City field
    - expect: User stays on registration page

#### 3.5. REG-TC-010: Empty State Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave State field empty and fill all other required fields with valid data
    - expect: State field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near State field
    - expect: User stays on registration page

#### 3.6. REG-TC-011: Empty Zip Code Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Zip Code field empty and fill all other required fields with valid data
    - expect: Zip Code field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Zip Code field
    - expect: User stays on registration page

#### 3.7. REG-TC-012: Empty Phone Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Phone field empty and fill all other required fields with valid data
    - expect: Phone field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Phone field
    - expect: User stays on registration page

#### 3.8. REG-TC-013: Empty SSN Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave SSN field empty and fill all other required fields with valid data
    - expect: SSN field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near SSN field
    - expect: User stays on registration page

#### 3.9. REG-TC-014: Empty Username Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Username field empty and fill all other required fields with valid data
    - expect: Username field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Username field (e.g., 'Username is required')
    - expect: User stays on registration page

#### 3.10. REG-TC-015: Empty Password Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Leave Password field empty and fill all other required fields with valid data
    - expect: Password field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays near Password field
    - expect: User stays on registration page

#### 3.11. REG-TC-016: Empty Confirm Password Field

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Password: 'Password123' and leave Confirm Password empty, fill all other valid data
    - expect: Confirm Password field remains empty
  3. Click Register button
    - expect: Form submission is blocked
    - expect: Error message displays for Confirm Password field
    - expect: User stays on registration page

#### 3.12. REG-TC-017: All Fields Empty

**File:** `tests/registration/field-validation.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Click Register button without filling any fields
    - expect: Form submission is blocked
    - expect: Multiple error messages display for required fields
    - expect: First error field receives focus or highlight

### 4. Input Format Tests (Edge Cases)

**Seed:** `seed.spec.ts`

#### 4.1. REG-TC-018: Letters in Phone Field

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Phone field: 'ABC1234567'
    - expect: Phone field either rejects letters or field remains empty
    - expect: Visual feedback indicates invalid input
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with error for Phone field
    - expect: Error message indicates phone must be numeric

#### 4.2. REG-TC-019: Letters in Zip Code Field

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Zip Code field: 'ABC123'
    - expect: Zip Code field either rejects letters or shows invalid format
    - expect: Visual feedback for invalid input
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with error for Zip Code
    - expect: Error message indicates proper format required

#### 4.3. REG-TC-020: Invalid Phone Format (Too Short)

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Phone field: '123456' (less than 10 digits)
    - expect: Phone field accepts the input
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with error
    - expect: Error message indicates phone must be 10 digits or required format

#### 4.4. REG-TC-021: Invalid Phone Format (Too Long)

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Phone field: '12345678901234567890' (more than 10 digits)
    - expect: Phone field either truncates or allows entry
  3. Fill all other fields with valid data and click Register
    - expect: Registration either succeeds with truncated value or fails with format error

#### 4.5. REG-TC-022: Invalid SSN Format (Missing Dashes)

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter SSN field: '123456789' (without dashes)
    - expect: SSN field accepts continuous digits
  3. Fill all other fields with valid data and click Register
    - expect: Registration either succeeds or fails based on SSN format requirements

#### 4.6. REG-TC-023: Invalid SSN Format (Wrong Pattern)

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter SSN field: '12-34-5678' (incorrect dash positions)
    - expect: SSN field either corrects format or accepts any dash pattern
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with format error or succeeds with normalized value

#### 4.7. REG-TC-024: Special Characters in First Name

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter First Name: 'John@123'
    - expect: First Name field accepts or rejects special characters based on validation rules
  3. Fill all other fields with valid data and click Register
    - expect: Registration either succeeds or fails based on name validation rules

#### 4.8. REG-TC-025: Numbers Only in First Name

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter First Name: '12345'
    - expect: First Name field may accept numbers or show validation warning
  3. Fill all other fields with valid data and click Register
    - expect: Registration may succeed or show validation error depending on requirements

#### 4.9. REG-TC-026: Maximum Length First Name (50+ characters)

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter First Name: 'JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn' (50+ characters)
    - expect: First Name field either truncates or accepts long input
  3. Fill all other fields with valid data and click Register
    - expect: Registration succeeds or fails based on field length validation

#### 4.10. REG-TC-027: Whitespace Only in Fields

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter First Name: '     ' (only spaces)
    - expect: Field appears filled but contains only whitespace
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with error
    - expect: System treats whitespace-only fields as empty/invalid

#### 4.11. REG-TC-028: Leading/Trailing Whitespace in Username

**File:** `tests/registration/input-format.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Username: '  johndoe123  ' (with leading/trailing spaces)
    - expect: Username field displays with spaces
  3. Fill all other fields with valid data and click Register
    - expect: System either trims whitespace or rejects entry
    - expect: If accepted, verify username stored correctly

### 5. Error Handling Tests (Negative)

**Seed:** `seed.spec.ts`

#### 5.1. REG-TC-029: Password and Confirm Password Mismatch

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Password: 'Password123' and Confirm Password: 'Password456'
    - expect: Fields accept different values
  3. Fill all other fields with valid data and click Register
    - expect: Form submission is blocked
    - expect: Error message displays (e.g., 'Passwords do not match')
    - expect: User stays on registration page

#### 5.2. REG-TC-030: Weak Password (No Uppercase)

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Password: 'password123' (no uppercase, only lowercase and numbers)
    - expect: Password field accepts the input
  3. Fill all other fields with valid data and click Register
    - expect: Registration may fail with password strength error OR succeed depending on requirements

#### 5.3. REG-TC-031: Weak Password (No Numbers)

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Password: 'PasswordOnly' (no numbers)
    - expect: Password field accepts the input
  3. Fill all other fields with valid data and click Register
    - expect: Registration may fail with password strength error OR succeed

#### 5.4. REG-TC-032: Weak Password (Too Short)

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Password: 'Pass1' (less than 8 characters)
    - expect: Password field accepts the input
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with password too short error OR succeeds

#### 5.5. REG-TC-033: Username Already Exists

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page (assuming 'testuser123' already exists in system)
    - expect: Registration page loads
  2. Enter all fields with valid data including Username: 'testuser123'
    - expect: Form is filled completely
  3. Click Register button
    - expect: Form submission fails
    - expect: Error message displays (e.g., 'Username already exists' or 'This username is not available')
    - expect: User stays on registration page with data preserved

#### 5.6. REG-TC-034: Duplicate Username Case-Insensitive

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page (assuming 'testuser123' already exists)
    - expect: Registration page loads
  2. Enter Username: 'TESTUSER123' (different case of existing username)
    - expect: Username field accepts input with uppercase variation
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails if system treats usernames as case-insensitive
    - expect: Error message: 'Username already exists'

#### 5.7. REG-TC-035: Username with Invalid Characters

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Enter Username: 'user@#$%^' (with special characters)
    - expect: Username field either accepts or rejects special characters
  3. Fill all other fields with valid data and click Register
    - expect: Registration fails with username format error OR succeeds

#### 5.8. REG-TC-036: Browser Back Button After Registration

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Complete successful registration
    - expect: User is logged in and on dashboard/welcome page
  2. Click browser back button
    - expect: User stays on logged-in page or is redirected
    - expect: User cannot return to empty registration page while logged in

#### 5.9. REG-TC-037: Page Refresh During Registration

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page and fill all fields with valid data
    - expect: Form is populated
  2. Without clicking Submit, press F5 or Cmd+R to refresh page
    - expect: Page refreshes and returns to empty registration form
    - expect: No data is saved

#### 5.10. REG-TC-038: Register Button Double-Click

**File:** `tests/registration/error-handling.spec.ts`

**Steps:**
  1. Navigate to registration page and fill all fields with valid data
    - expect: Form is populated
  2. Double-click the Register button
    - expect: Form submits only once
    - expect: No duplicate account is created
    - expect: User sees single success message

### 6. Username Uniqueness Tests

**Seed:** `seed.spec.ts`

#### 6.1. REG-TC-039: Username Availability Check (Unique)

**File:** `tests/registration/username-uniqueness.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Generate unique username: 'newuser' + timestamp (e.g., 'newuser1715000000')
    - expect: Username generated is unique
  3. Fill all fields with this unique username and valid data
    - expect: Form is completed
  4. Click Register button
    - expect: Registration succeeds
    - expect: Account created with the unique username

#### 6.2. REG-TC-040: Cannot Register with Same Username Twice

**File:** `tests/registration/username-uniqueness.spec.ts`

**Steps:**
  1. Complete first registration with Username: 'uniqueuser001'
    - expect: First registration succeeds
  2. Log out or navigate back to registration page
    - expect: Successfully returned to registration page or logged out
  3. Attempt to register again with same Username: 'uniqueuser001' and different email/phone
    - expect: Registration page loads
  4. Fill all registration fields with same username and different personal data
    - expect: Form is completed
  5. Click Register button
    - expect: Registration fails
    - expect: Error message: 'Username already exists' or similar
    - expect: No duplicate account created

### 7. Post-Registration Tests (Navigation & Login)

**Seed:** `seed.spec.ts`

#### 7.1. REG-TC-041: Auto-Login After Registration

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Navigate to registration page
    - expect: Registration page loads
  2. Complete registration with username 'autouser123' and valid data
    - expect: Registration succeeds
  3. Observe if user is automatically logged in
    - expect: User is redirected to dashboard/account page
    - expect: User can see personal dashboard or account overview
    - expect: Username 'autouser123' is visible indicating logged-in status

#### 7.2. REG-TC-042: Successful Login with Registered Credentials

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Complete registration with Username: 'loginuser456' and Password: 'TestPass123'
    - expect: Registration succeeds
  2. Log out from the system
    - expect: User successfully logged out
  3. Navigate to login page
    - expect: Login page loads
  4. Enter Username: 'loginuser456' and Password: 'TestPass123'
    - expect: Login fields populated
  5. Click Login button
    - expect: Login succeeds
    - expect: User is authenticated and logged in
    - expect: Dashboard/account page displays
    - expect: Username 'loginuser456' visible on page

#### 7.3. REG-TC-043: Login with Registered Username but Wrong Password

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Complete registration with Username: 'wrongpass111' and Password: 'Correct123'
    - expect: Registration succeeds
  2. Log out from system
    - expect: Logged out successfully
  3. Navigate to login page and enter Username: 'wrongpass111' and Password: 'Wrong456'
    - expect: Login fields populated with wrong password
  4. Click Login button
    - expect: Login fails
    - expect: Error message displays (e.g., 'Invalid username/password combination')
    - expect: User stays on login page
    - expect: Password field is cleared

#### 7.4. REG-TC-044: Success Confirmation Message Display

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Complete registration with valid data
    - expect: Registration submitted
  2. Verify success message is displayed
    - expect: Confirmation message is visible (e.g., 'Your account has been successfully created')
    - expect: Message contains registered username
    - expect: Message provides next steps or welcome information

#### 7.5. REG-TC-045: Registration Data Persists in User Profile

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Register with specific data: First Name: 'Jane', Last Name: 'Smith', City: 'Boston'
    - expect: Registration succeeds
    - expect: User logged in
  2. Navigate to user profile or account information page
    - expect: Profile page loads
  3. Verify registered information is displayed: First Name: 'Jane', Last Name: 'Smith', City: 'Boston'
    - expect: All registration data is persisted and displayed correctly
    - expect: Data matches what was entered during registration

#### 7.6. REG-TC-046: Access Banking Features After Registration

**File:** `tests/registration/post-registration.spec.ts`

**Steps:**
  1. Complete registration successfully
    - expect: User is registered and logged in
  2. Check navigation menu for banking features (e.g., Accounts, Transfer, Bill Pay)
    - expect: Banking features are available in menu
  3. Click on a banking feature (e.g., 'Accounts')
    - expect: User can access banking features without error
    - expect: Feature page loads successfully
