import { test, expect } from '../fixtures/test';
import { loginData } from '../test-data/loginData';

//organize related tests in one group
//before any test case, automatically execute loginPAge.navigate()
//test the login and verify its landing to dashboard url

test.describe('Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async ({
    page,
    loginPage,
  }) => {

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    // await expect(page).toHaveURL(/dashboard/);
  });

});