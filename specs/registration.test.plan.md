# Parabank Registration Test Plan

## Application Overview

Registration-only QA coverage for Parabank from homepage entry to register form, including required-field validation, duplicate-username handling, password confirmation mismatch, and successful account creation login state.

## Test Scenarios

### 1. Registration Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Navigate Homepage to Register

**File:** `tests/registration/navigate-to-register.spec.ts`

**Steps:**
  1. Open Parabank homepage in a fresh anonymous session.
    - expect: Homepage loads with Customer Login panel.
    - expect: Register link is visible in the login panel.
  2. Click Register link.
    - expect: Browser navigates to register page at register.htm.
    - expect: Registration form and Register submit control are visible.

#### 1.2. Required Field Validation

**File:** `tests/registration/required-field-validation.spec.ts`

**Steps:**
  1. On register page with blank form, click Register.
    - expect: Inline required-field errors appear for first name, last name, address, city, state, zip code, SSN, username, password, and confirm password.
    - expect: No success confirmation appears.
    - expect: User remains on register page.

#### 1.3. Password Confirmation Mismatch

**File:** `tests/registration/password-mismatch.spec.ts`

**Steps:**
  1. Fill all required fields with valid values, but enter different values for Password and Confirm.
    - expect: Inline error appears for confirm password indicating mismatch.
    - expect: Form is not submitted successfully.
    - expect: User remains on register page.

#### 1.4. Duplicate Username Handling

**File:** `tests/registration/duplicate-username.spec.ts`

**Steps:**
  1. Submit registration with a username that already exists.
    - expect: Inline username error appears: This username already exists.
    - expect: No success confirmation appears.
    - expect: User remains on register page for correction and resubmission.

#### 1.5. Successful Registration and Logged-In State

**File:** `tests/registration/successful-registration.spec.ts`

**Steps:**
  1. Submit registration with unique username and valid values for all required fields.
    - expect: Success heading appears with username.
    - expect: Confirmation message indicates account created successfully and logged in.
    - expect: Account Services menu is visible including Log Out and Accounts Overview links.
    - expect: Session appears authenticated immediately after registration.
