# QA Testing Foundation — User Registration Feature (`PARA-REG-001`)

---

## 1. User Story Summary

- **Feature:** User Registration (`PARA-REG-001`)
- **User Goal:** As a new user, register for a Parabank account by providing personal and login credentials
- **System Outcome:** The system validates all inputs, creates the account, confirms success, and automatically logs the user in

---

## 2. Key Functional Requirements

- The system must display a registration form accessible via the "Register" link on the homepage
- All required fields must be completed before submission is allowed
- The system must validate input formats (phone, zip code, SSN)
- Usernames must be unique across the system
- Passwords must meet minimum complexity requirements
- On successful registration, the system must create the account  
- The system must display a confirmation message on successful registration
- The system must display appropriate validation error messages for invalid or missing inputs

---

## 3. Acceptance Criteria

### AC1: Access Registration Page
- GIVEN I am on the Parabank homepage
- WHEN I click on the "Register" link
- THEN I should be redirected to the registration page
- AND I should see a registration form

### AC2: Successful Registration
- GIVEN I am on the registration page
- WHEN I enter valid details in all required fields
- AND I click the "Register" button
- THEN my account should be created successfully
- AND I should see a confirmation message
- AND I should be logged into my new account

### AC3: Mandatory Field Validation
- GIVEN I am on the registration page
- WHEN I leave any required field empty and submit
- THEN I should see validation messages for missing fields
- AND registration should not be successful

### AC4: Username Uniqueness
- GIVEN a username already exists
- WHEN I attempt to register with the same username
- THEN I should see an error message indicating the username is taken
- AND I should not be able to proceed

### AC5: Invalid Input Handling
- GIVEN I am filling the registration form
- WHEN I enter invalid data (e.g., letters in numeric fields, weak password)
- THEN I should see appropriate validation error messages
- AND I should not be able to submit until inputs are valid

### AC6: Login After Registration
- GIVEN I have successfully registered
- WHEN I navigate to login and enter my credentials
- THEN I should be logged into the system

---

## 4. Testing Scope

### Positive Flow
- Navigate to registration page from homepage via "Register" link
- Complete all fields with valid data and submit
- Verify confirmation message is displayed
- Verify user is automatically logged in after registration

### Negative Scenarios
- Submit form with all fields empty — verify per-field validation messages
- Submit form with individual required fields left blank (one at a time)
- Submit with a username that already exists — verify duplicate username error
- Submit with mismatched password and confirm password values
- Submit with invalid formats (letters in phone/zip/SSN fields)

### Edge Cases
- Username at minimum and maximum character boundaries
- Password at minimum complexity boundary (e.g., exactly meets requirements)
- Fields containing special characters or whitespace only
- Extremely long input strings in text fields
- SSN and phone number format variations

---

## 5. Test Environment Details

- **Application URL:** `https://parabank.parasoft.com/parabank`
- **Browsers:** Chrome, Firefox, Safari
- **Test Framework:** Playwright

### Sample Test Data
| Field      | Value          |
|------------|----------------|
| First Name | John           |
| Last Name  | Doe            |
| Address    | 123 Main St    |
| City       | Toronto        |
| State      | ON             |
| Zip Code   | M1A1A1         |
| Phone      | 1234567890     |
| SSN        | 123-45-6789    |
| Username   | johndoe123     |
| Password   | Password123    |

---

## 6. Key Features for Automation

| Area | Description |
|---|---|
| **Form Navigation** | Verify "Register" link navigates to the registration page |
| **Form Validation** | Assert per-field error messages when fields are empty or invalid |
| **Input Format Validation** | Assert errors for invalid phone, zip, and SSN formats |
| **Duplicate Username Handling** | Assert error message when registering with an existing username |
| **Submission Flow** | Submit complete valid form and assert no errors |
| **Success Confirmation** | Assert confirmation message appears after successful registration |
| **Auto-Login After Registration** | Assert user is authenticated and account page is visible post-registration |
| **Password Complexity** | Assert rejection of passwords that do not meet complexity rules |
