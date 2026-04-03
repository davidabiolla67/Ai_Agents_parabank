# User Story: PARA-REG-001 - User Registration  

## Story Title  
As a new user, I want to register for an account so that I can access Parabank online banking services.

---

## Story Description  
Implement a user registration feature that allows new users to create an account by providing personal and login information.  
The system should validate all inputs, ensure data integrity, and provide clear feedback for successful or failed registration attempts.

---

## Application URL  
https://parabank.parasoft.com/parabank  

---

##  Test Data (Sample)  
- First Name: John  
- Last Name: Doe  
- Address: 123 Main St  
- City: Toronto  
- State: ON  
- Zip Code: M1A1A1  
- Phone: 1234567890  
- SSN: 123-45-6789  
- Username: johndoe123  
- Password: Password123  

---

##  Acceptance Criteria  

### AC1: Access Registration Page  
- GIVEN I am on the Parabank homepage  
- WHEN I click on the "Register" link  
- THEN I should be redirected to the registration page  
- AND I should see a registration form  

---

### AC2: Successful Registration  
- GIVEN I am on the registration page  
- WHEN I enter valid details in all required fields  
- AND I click the "Register" button  
- THEN my account should be created successfully  
- AND I should see a confirmation message  
- AND I should be logged into my new account  

---

### AC3: Mandatory Field Validation  
- GIVEN I am on the registration page  
- WHEN I leave any required field empty and submit  
- THEN I should see validation messages for missing fields  
- AND registration should not be successful  

---

### AC4: Username Uniqueness  
- GIVEN a username already exists  
- WHEN I attempt to register with the same username  
- THEN I should see an error message indicating username is taken  
- AND I should not be able to proceed  

---

###  AC5: Invalid Input Handling  
- GIVEN I am filling the registration form  
- WHEN I enter invalid data (e.g., letters in numeric fields, weak password)  
- THEN I should see appropriate validation error messages  
- AND I should not be able to submit until inputs are valid  

---

### AC6: Login After Registration  
- GIVEN I have successfully registered  
- WHEN I navigate to login  
- AND I enter my credentials  
- THEN I should be logged into the system  

---

##  Business Rules  
1. All required fields must be completed  
2. Username must be unique  
3. Password must meet minimum complexity requirements  
4. System must validate input formats (e.g., phone, zip, SSN)  
5. User should be automatically logged in after successful registration  

---

## Technical Notes  
- Use Playwright for UI automation  
- Validate form input behavior and error messages  
- Test across Chrome, Firefox, and Safari  
- Verify successful login after registration  
- Ensure proper handling of duplicate usernames  

---

## Definition of Done  
- All acceptance criteria have test cases  
- Manual testing completed  
- Automated test scripts created and passing  
- Validation errors properly handled  
- No critical defects  
- Code committed to repository  