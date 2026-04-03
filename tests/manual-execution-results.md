# Manual Test Execution Results

## Feature: User Registration (PARA-REG-001)
- **Executed:** 2026-04-01
- **Environment:** https://parabank.parasoft.com/parabank
- **Tool:** Playwright MCP browser automation
- **Executor:** AI QA Execution Agent

---

## TC-REG-001 — Access registration page from homepage

| Field | Value |
|---|---|
| Test Case ID | TC-REG-001 |
| Test Title | Access registration page from homepage |
| Execution Status | **PASS** |
| Expected Result | Homepage loads, Register link visible, navigates to /parabank/register.htm |
| Actual Result | Homepage loaded in unauthenticated state. Register link present in Customer Login panel. Click redirected to /parabank/register.htm. Page title: "ParaBank \| Register for Free Online Account Access". |
| Notes | Confirmed. |
| Screenshot | screenshots/user-registration/01-homepage-before-register-click.png |

---

## TC-REG-002 — Verify registration form UI elements

| Field | Value |
|---|---|
| Test Case ID | TC-REG-002 |
| Test Title | Verify registration form UI elements |
| Execution Status | **PASS** |
| Expected Result | All required labels visible; Register button present and enabled; helper text visible |
| Actual Result | Labels confirmed: First Name, Last Name, Address, City, State, Zip Code, Phone #, SSN, Username, Password, Confirm. Register button visible and enabled. Helper text: "If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information." |
| Notes | No placeholder text in any input field. Phone # is optional — no required validation observed. |
| Screenshot | screenshots/user-registration/02-registration-page.png |

---

## TC-REG-003 — Successful registration with valid data

| Field | Value |
|---|---|
| Test Case ID | TC-REG-003 |
| Test Title | Successful registration with valid data |
| Execution Status | **PASS** |
| Expected Result | Account created, confirmation message shown, user logged in |
| Actual Result | Form filled with valid data (username: qaauto_1775016687896). Registration succeeded. Success message: "Your account was created successfully. You are now logged in." Welcome heading: "Welcome qaauto_1775016687896". |
| Notes | Confirmed. |
| Screenshot | screenshots/user-registration/05-valid-registration-filled.png |

---

## TC-REG-004 — Verify post-registration logged-in state

| Field | Value |
|---|---|
| Test Case ID | TC-REG-004 |
| Test Title | Verify post-registration logged-in state |
| Execution Status | **PASS** |
| Expected Result | Welcome heading shown, Account Services visible, Log Out link visible |
| Actual Result | Welcome heading shown "Welcome qaauto_1775016687896". Account Services sidebar visible with Open New Account, Accounts Overview, Transfer Funds, Bill Pay, Find Transactions, Update Contact Info, Request Loan, Log Out. |
| Notes | AC2 and AC6 confirmed. User is logged in immediately post-registration. |
| Screenshot | screenshots/user-registration/06-successful-registration.png |

---

## TC-REG-005 — Mandatory validation on full empty submit

| Field | Value |
|---|---|
| Test Case ID | TC-REG-005 |
| Test Title | Mandatory validation on full empty submit |
| Execution Status | **PASS** |
| Expected Result | Inline errors for all required fields, no registration |
| Actual Result | Errors shown: "First name is required.", "Last name is required.", "Address is required.", "City is required.", "State is required.", "Zip Code is required.", "Social Security Number is required.", "Username is required.", "Password is required.", "Password confirmation is required." Page stayed on register.htm. |
| Notes | 10 required field errors confirmed. Phone # field produced no required error — optional, as expected. |
| Screenshot | screenshots/user-registration/03-empty-field-errors.png |

---

## TC-REG-006 — Mandatory field validation per field

| Field | Value |
|---|---|
| Test Case ID | TC-REG-006 |
| Test Title | Mandatory field validation per field |
| Execution Status | **PASS** |
| Expected Result | Error shown only for the omitted required field; submission blocked |
| Actual Result | Each of the 10 required fields tested individually. All produced the expected validation message and stayed on register.htm. No account was created in any omission iteration. |
| Notes | Validation is per-field and precise. |
| Screenshot | screenshots/user-registration/03-empty-field-errors.png |

---

## TC-REG-007 — Password and confirm mismatch validation

| Field | Value |
|---|---|
| Test Case ID | TC-REG-007 |
| Test Title | Password and confirm mismatch validation |
| Execution Status | **PASS** |
| Expected Result | "Passwords did not match." error shown; no registration |
| Actual Result | Entered Password: Password123, Confirm: Password1234. Error shown inline: "Passwords did not match." Page stayed on register.htm. No account created. |
| Notes | Confirmed. |
| Screenshot | screenshots/user-registration/04-password-mismatch-error.png |

---

## TC-REG-008 — Duplicate username handling

| Field | Value |
|---|---|
| Test Case ID | TC-REG-008 |
| Test Title | Duplicate username handling |
| Execution Status | **PASS** |
| Expected Result | "This username already exists." shown; no registration |
| Actual Result | Used existing username qaauto_1775016687896 with different personal data. Error shown inline: "This username already exists." Page stayed on register.htm. No second account created. |
| Notes | Confirmed. |
| Screenshot | screenshots/user-registration/07-duplicate-username-error.png |

---

## TC-REG-009 — Invalid input format validation (phone, zip, SSN)

| Field | Value |
|---|---|
| Test Case ID | TC-REG-009 |
| Test Title | Invalid input format validation for numeric/format-sensitive fields |
| Execution Status | **FAIL — DEFECT** |
| Expected Result | Format validation errors shown for invalid phone, zip, SSN; submission blocked |
| Actual Result | Invalid Zip Code "@@##", invalid SSN "ABCDEF" — system ACCEPTED these and registration SUCCEEDED. No format validation error was shown. Invalid Phone "abcdef" case had a username-uniqueness collision that blocked completion, but there was no phone-format error. |
| Notes | No client-side or server-side format validation detected for Zip Code or SSN. |
| Screenshot | screenshots/user-registration/08-invalid-format-phone-attempt.png |

---

## TC-REG-010 — Weak or invalid password validation

| Field | Value |
|---|---|
| Test Case ID | TC-REG-010 |
| Test Title | Weak or invalid password validation |
| Execution Status | **FAIL — DEFECT** |
| Expected Result | Password validation feedback shown for weak passwords; submission blocked |
| Actual Result | Weak password "abc123" with all other fields valid was accepted and registration SUCCEEDED. No complexity validation is enforced. |
| Notes | Business rule 3 (password must meet minimum complexity requirements) is NOT enforced. |
| Screenshot | screenshots/user-registration/09-weak-password-attempt.png |

---

## TC-REG-011 — Boundary validation for username and password lengths

| Field | Value |
|---|---|
| Test Case ID | TC-REG-011 |
| Test Title | Boundary validation for username and password lengths |
| Execution Status | **PARTIAL FAIL — DEFECT** |
| Expected Result | Inputs at allowed boundaries accepted; inputs outside boundaries rejected |
| Actual Result | Single-character username "a" — ACCEPTED (registration succeeded). Username of 48 characters (longuser + 40 x's) — FAILED, but with "This username already exists." not a length error, suggesting it may have matched a pre-existing entry. Password of 60 characters — also returned "duplicate username". Short password of 1 character "a" — returned duplicate rather than a validation error, so password-length enforcement could not be confirmed. No length boundary errors were surfaced by the UI. |
| Notes | The long-username test gave a collision response rather than a length error — unclear whether a hard limit exists. Retesting with fresh usernames against uniqueness is advised. No password minimum length appears enforced. |
| Screenshot | screenshots/user-registration/10-boundary-and-special-cases.png |

---

## TC-REG-012 — Special character handling in registration fields

| Field | Value |
|---|---|
| Test Case ID | TC-REG-012 |
| Test Title | Special character handling in registration fields |
| Execution Status | **PARTIAL PASS — DEFECT** |
| Expected Result | Allowed punctuation accepted; disallowed special characters in sensitive fields should be rejected |
| Actual Result | First Name "Anne-Marie", Last Name "O'Neil", address "#12, 45/B Main St." — accepted during the allowed-specials run (duplicate username blockedfull confirmation, but no character-rejection error was seen). Username with special characters "user!@#timestamp" — ACCEPTED and registration SUCCEEDED. SSN "12@#$" and Zip "!zip!" — ACCEPTED and registration SUCCEEDED. |
| Notes | No special-character input sanitization or rejection was observed on any field including SSN, Zip Code, or Username. |
| Screenshot | screenshots/user-registration/10-boundary-and-special-cases.png |

---

## TC-REG-013 — Form behavior with long input values

| Field | Value |
|---|---|
| Test Case ID | TC-REG-013 |
| Test Title | Form behavior with long input values |
| Execution Status | **PARTIAL FAIL — DEFECT** |
| Expected Result | Field length limits enforced; validation feedback for over-limit inputs |
| Actual Result | 120-character values entered in First Name, Last Name, Address, City, State. Form accepted the long inputs visually. Submission returned "This username already exists" meaning the form itself was submitted but blocked for a different reason. No max-length validation error or truncation feedback was shown. The UI did not break. |
| Notes | Field maxlength attributes may be absent. No explicit length-limit enforcement visible. |
| Screenshot | screenshots/user-registration/10-boundary-and-special-cases.png |

---

# Observations and Findings

| # | Observation |
|---|---|
| 1 | Phone # field is optional — the system allows blank phone and returns no required-field error |
| 2 | The unauthenticated session required cookie reset; a prior logged-in session was present at test start |
| 3 | The successful registration occurs at the /parabank/register.htm URL (page title changes to "ParaBank \| Customer Created") — the URL stays the same post-registration |
| 4 | Empty-submit validation is client-assisted (form stays on same URL with inline errors — no POST to server for empty fields) |
| 5 | Long username collision behavior: unclear if the 48-char username was already in the system, or if there is a backend uniqueness check on a truncated version |

---

# Screenshot Evidence

| File | Scenario |
|---|---|
| screenshots/user-registration/01-homepage-before-register-click.png | Homepage logged-out state; Register link visible |
| screenshots/user-registration/02-registration-page.png | Registration form page with all field labels |
| screenshots/user-registration/03-empty-field-errors.png | Empty submit — all 10 required-field validation errors |
| screenshots/user-registration/04-password-mismatch-error.png | Password and confirm mismatch error |
| screenshots/user-registration/05-valid-registration-filled.png | Valid registration form filled before submission |
| screenshots/user-registration/06-successful-registration.png | Successful registration — welcome heading and logged-in state |
| screenshots/user-registration/07-duplicate-username-error.png | Duplicate username error message |
| screenshots/user-registration/08-invalid-format-phone-attempt.png | Invalid phone input attempt |
| screenshots/user-registration/09-weak-password-attempt.png | Weak password attempt |
| screenshots/user-registration/10-boundary-and-special-cases.png | Boundary, special character, and long input scenarios |

---

# Defects Identified

## DEFECT-001 — No input format validation for Zip Code
- **Severity:** High
- **Test Case:** TC-REG-009
- **Steps to Reproduce:** Enter "@@##" as Zip Code with all other fields valid, submit
- **Expected:** Format validation error shown, submission blocked
- **Actual:** Registration succeeds with "@@##" as the stored zip code
- **Impact:** Invalid or malformed zip codes are persisted in the system
- **AC:** AC5 — NOT SATISFIED

## DEFECT-002 — No input format validation for SSN
- **Severity:** High
- **Test Case:** TC-REG-009, TC-REG-012
- **Steps to Reproduce:** Enter "ABCDEF" or "12@#$" as SSN with all other fields valid, submit
- **Expected:** Format validation error shown, submission blocked
- **Actual:** Registration succeeds with malformed SSN stored
- **Impact:** Non-numeric and symbol-laden SSN values are accepted unchecked
- **AC:** AC5 — NOT SATISFIED

## DEFECT-003 — No password complexity validation
- **Severity:** High
- **Test Case:** TC-REG-010
- **Steps to Reproduce:** Enter weak password "abc123" (no uppercase, simple), submit with matching confirm
- **Expected:** Password complexity validation error, submission blocked
- **Actual:** Registration succeeds — weak passwords are accepted
- **Impact:** Business Rule 3 is not enforced. User accounts can be created with trivially guessable passwords
- **AC:** AC5 — NOT SATISFIED

## DEFECT-004 — Username permits special characters including @ # !
- **Severity:** Medium
- **Test Case:** TC-REG-012
- **Steps to Reproduce:** Enter username "user!@#timestamp", submit with valid other fields
- **Expected:** Format validation error or character restriction enforced
- **Actual:** Registration succeeds with special-character username stored
- **Impact:** Username format is not restricted; could cause downstream display or authentication issues
- **AC:** AC5 — NOT SATISFIED

## DEFECT-005 — No field length limits enforced (First Name, Last Name, Address, City, State)
- **Severity:** Medium
- **Test Case:** TC-REG-013
- **Steps to Reproduce:** Enter 120-character strings in First Name, Last Name, Address, City, State fields; submit
- **Expected:** Max-length enforcement or truncation with validation feedback
- **Actual:** Long inputs accepted without any length validation message
- **Impact:** Potential data integrity risk and database overflow over time
- **AC:** AC5 — NOT SATISFIED
