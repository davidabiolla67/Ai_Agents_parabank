# User Registration Test Plan

## Feature
- User Registration (PARA-REG-001)

## References
- User story: userstories/Parabank_userstories.md
- Requirements summary: summary/requirement_acceptancesummary.md
- Application URL: https://parabank.parasoft.com/parabank
- Registration URL: https://parabank.parasoft.com/parabank/register.htm

## Scope
- Registration page access and navigation
- Registration form UI and validation behavior
- Registration submission outcomes (success and failure)
- Registration-only boundary and edge conditions

## Out of Scope
- Funds transfer, bill pay, account transaction workflows

## Test Scenarios

### TC-REG-001
- Test Case ID: TC-REG-001
- Test Title: Access registration page from homepage
- Preconditions:
  1. User is on Parabank homepage
- Test Steps:
  1. Open https://parabank.parasoft.com/parabank
  2. Click Register link in Customer Login panel
- Expected Results:
  1. Homepage loads successfully
  2. User is redirected to /parabank/register.htm and registration form is visible
- Test Data:
  1. None
- Test Type: Positive
- Priority: High
- Automation Candidate: Yes

### TC-REG-002
- Test Case ID: TC-REG-002
- Test Title: Verify registration form UI elements
- Preconditions:
  1. User is on registration page
- Test Steps:
  1. Verify field labels are present: First Name, Last Name, Address, City, State, Zip Code, Phone #, SSN, Username, Password, Confirm
  2. Verify Register button is present and enabled
  3. Verify registration helper text is displayed
- Expected Results:
  1. All required registration fields and labels are visible
  2. Register button is visible and actionable
  3. Registration helper text is visible
- Test Data:
  1. None
- Test Type: Positive
- Priority: High
- Automation Candidate: Yes

### TC-REG-003
- Test Case ID: TC-REG-003
- Test Title: Successful registration with valid data
- Preconditions:
  1. User is on registration page
  2. Username is unique
- Test Steps:
  1. Enter valid values in all required fields and optional phone field
  2. Click Register
- Expected Results:
  1. Form accepts input without validation errors
  2. Account is created, success message appears, and user is logged in
- Test Data:
  1. First Name: John
  2. Last Name: Doe
  3. Address: 123 Main St
  4. City: Toronto
  5. State: ON
  6. Zip Code: M1A1A1
  7. Phone: 1234567890
  8. SSN: 123-45-6789
  9. Username: unique_user_<timestamp>
  10. Password: Password123
  11. Confirm: Password123
- Test Type: Positive
- Priority: High
- Automation Candidate: Yes

### TC-REG-004
- Test Case ID: TC-REG-004
- Test Title: Verify post-registration logged-in state
- Preconditions:
  1. User has just completed successful registration
- Test Steps:
  1. Observe post-submit page
  2. Verify logged-in controls and account services area
- Expected Results:
  1. Success confirmation message is displayed
  2. Logged-in indicators are visible (welcome heading, Account Services, Log Out)
- Test Data:
  1. Newly registered credentials from TC-REG-003
- Test Type: Positive
- Priority: High
- Automation Candidate: Yes

### TC-REG-005
- Test Case ID: TC-REG-005
- Test Title: Mandatory validation on full empty submit
- Preconditions:
  1. User is on registration page
- Test Steps:
  1. Leave all fields empty
  2. Click Register
- Expected Results:
  1. Inline errors are shown for all required fields
  2. Registration is not completed
- Test Data:
  1. Empty input set
- Test Type: Negative
- Priority: High
- Automation Candidate: Yes

### TC-REG-006
- Test Case ID: TC-REG-006
- Test Title: Mandatory field validation per field
- Preconditions:
  1. User is on registration page
  2. All fields have valid data except the target field under test
- Test Steps:
  1. For each required field, clear only that field and keep other required fields valid
  2. Click Register
  3. Repeat for: First Name, Last Name, Address, City, State, Zip Code, SSN, Username, Password, Confirm
- Expected Results:
  1. Validation message appears only for the missing required field
  2. Submission is blocked for each iteration
  3. No account is created
- Test Data:
  1. Base valid dataset with one required field blank per iteration
- Test Type: Negative
- Priority: High
- Automation Candidate: Yes

### TC-REG-007
- Test Case ID: TC-REG-007
- Test Title: Password and confirm mismatch validation
- Preconditions:
  1. User is on registration page
  2. Required non-password fields are valid
- Test Steps:
  1. Enter Password value
  2. Enter different Confirm value
  3. Click Register
- Expected Results:
  1. Password mismatch validation is shown
  2. Registration is not completed
- Test Data:
  1. Password: Password123
  2. Confirm: Password1234
- Test Type: Negative
- Priority: High
- Automation Candidate: Yes

### TC-REG-008
- Test Case ID: TC-REG-008
- Test Title: Duplicate username handling
- Preconditions:
  1. Existing username is known in system
  2. User is on registration page
- Test Steps:
  1. Enter valid registration data using existing username
  2. Click Register
- Expected Results:
  1. Duplicate username error is displayed
  2. Registration is not completed
- Test Data:
  1. Username: pre_existing_username
  2. Other fields: valid
- Test Type: Edge
- Priority: High
- Automation Candidate: Yes

### TC-REG-009
- Test Case ID: TC-REG-009
- Test Title: Invalid input format validation for numeric/format-sensitive fields
- Preconditions:
  1. User is on registration page
  2. All required fields have valid values except target format field under test
- Test Steps:
  1. Enter invalid value in Phone field and submit
  2. Enter invalid value in Zip Code field and submit
  3. Enter invalid value in SSN field and submit
- Expected Results:
  1. Appropriate format validation feedback is displayed for invalid inputs
  2. Submission is blocked until invalid values are corrected
- Test Data:
  1. Phone invalid sample: abcdef
  2. Zip Code invalid sample: @@##
  3. SSN invalid sample: ABC-DE-FGHI
- Test Type: Negative
- Priority: High
- Automation Candidate: Yes

### TC-REG-010
- Test Case ID: TC-REG-010
- Test Title: Weak or invalid password validation
- Preconditions:
  1. User is on registration page
  2. All other required fields are valid
- Test Steps:
  1. Enter weak password sample
  2. Enter same value in Confirm
  3. Click Register
- Expected Results:
  1. Password validation feedback is displayed
  2. Submission is blocked until password meets complexity requirements
- Test Data:
  1. Weak password samples: password, 12345678, abc123
- Test Type: Negative
- Priority: High
- Automation Candidate: Yes

### TC-REG-011
- Test Case ID: TC-REG-011
- Test Title: Boundary validation for username and password lengths
- Preconditions:
  1. User is on registration page
- Test Steps:
  1. Enter minimum allowed username length (system-defined) and valid other fields, submit
  2. Enter maximum allowed username length (system-defined) and valid other fields, submit
  3. Enter below-minimum username length and submit
  4. Enter above-maximum username length and submit
  5. Repeat boundary checks for password length with matching Confirm
- Expected Results:
  1. Inputs at allowed boundaries are accepted
  2. Inputs outside allowed boundaries are rejected with validation feedback
- Test Data:
  1. Boundary datasets aligned to implemented limits
- Test Type: Edge
- Priority: Medium
- Automation Candidate: Yes

### TC-REG-012
- Test Case ID: TC-REG-012
- Test Title: Special character handling in registration fields
- Preconditions:
  1. User is on registration page
- Test Steps:
  1. Enter names and address containing allowed punctuation/special characters
  2. Enter disallowed special characters in sensitive fields where applicable
  3. Click Register
- Expected Results:
  1. Allowed characters are accepted
  2. Disallowed characters trigger validation feedback
  3. Registration behavior is consistent with field rules
- Test Data:
  1. Name sample: Anne-Marie O'Neil
  2. Address sample: #12, 45/B Main St.
  3. Sensitive-field invalid sample set: symbols in Username/SSN/Zip as applicable
- Test Type: Edge
- Priority: Medium
- Automation Candidate: Yes

### TC-REG-013
- Test Case ID: TC-REG-013
- Test Title: Form behavior with long input values
- Preconditions:
  1. User is on registration page
- Test Steps:
  1. Enter very long values into text fields one at a time
  2. Attempt form submission
- Expected Results:
  1. Field limits are enforced without UI breakage
  2. Validation feedback appears where length exceeds limits
  3. Submission is blocked for invalid over-limit inputs
- Test Data:
  1. Over-limit strings for First Name, Last Name, Address, City, State, Username
- Test Type: Edge
- Priority: Medium
- Automation Candidate: Yes

## Acceptance Criteria Coverage Matrix
- AC1 covered by: TC-REG-001, TC-REG-002
- AC2 covered by: TC-REG-003, TC-REG-004
- AC3 covered by: TC-REG-005, TC-REG-006
- AC4 covered by: TC-REG-008
- AC5 covered by: TC-REG-007, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013
- AC6 covered by: TC-REG-004
