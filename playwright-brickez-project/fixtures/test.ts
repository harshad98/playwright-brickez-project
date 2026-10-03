import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


//Automatically create and provide a LoginPage Page Object to your tests, 
// so you don't have to manually write new LoginPage(page) in every test.
type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
});

export { expect } from '@playwright/test';