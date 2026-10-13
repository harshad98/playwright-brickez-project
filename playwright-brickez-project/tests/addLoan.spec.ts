import { test, expect } from '../fixtures/test';
import { loginData } from '../test-data/loginData';

test.describe('AddLoan', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

  });

  test('add a loan successfully', async ({ addLoanPage, page }) => {
    const loanNumber = '123456';


    // Step 1: Navigate to Loans
    await addLoanPage.NavigateToLoans();

    // Step 2: Click Add Loan
    await addLoanPage.clickAddLoan();

    // Step 3: Fill loan details and submit
    await addLoanPage.addLoan(
      'Rahul',           // firstName
      'Sharma',          // lastName
      '9876543210',      // mobile
      'Home Loan',       // loanType - use an actual dropdown option
      'Aurangabad',     // branch - use an actual branch option
      loanNumber,   // loanNumber - use a unique test value
      '2500000',         // sanctionedAmount
      '11-10-2026',       //sanctioned date
      '75',              // ltv
      'Load Bearing',     // structureType - use an actual dropdown option
      'GROUND',               // noOfFloors - use the actual option label
      '1500'             // builtUpArea
    );

    // Step 4: Add an assertion for the actual success message
    // Verify redirect to Loans table
    await expect(page).toHaveURL(/customers-accounts/);

    // Verify that the exact loan number is visible
    await expect(
      page.getByText(loanNumber, { exact: true })
    ).toBeVisible();

  });
});