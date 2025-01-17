import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
// import loginPage from '../pageobjects/login.page.js';
Given('user is on Login page', async () => {
  await LoginPage.open()
})

Then(/^user input (.*) as username$/, async (username) => {
    await LoginPage.inputUsername(username)
});

Then(/^user input (.*) as password$/, async (username) => {
    await LoginPage.inputPassword(password)
});

Then(/^user input (.*) as username and input  (.*) as password$/, async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
});

When('user click login button', async () => {
    await LoginPage.clickLoginButton()
})

Then('user should be redirected to homepage', async () => {
    await HomePage.valideteOnHomePage()
})

When('user login using {string} as username and {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
})

Then (/^usershould see error message (.*)$/, async (errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage)
});

