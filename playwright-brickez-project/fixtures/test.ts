import { AddLoanPage } from './../pages/AddLoanPage';
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
 


//Automatically create and provide a LoginPage Page Object to your tests, 
// so you don't have to manually write new LoginPage(page) in every test.
type Fixtures = {
  loginPage: LoginPage;
  addLoanPage: AddLoanPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  addLoanPage: async ({ page }, use) => {
    const addLoanPage = new AddLoanPage(page);
    await use(addLoanPage);
  }

});

export { expect } from '@playwright/test';