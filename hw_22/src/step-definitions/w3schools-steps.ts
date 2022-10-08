import { Given, Then, When } from '@wdio/cucumber-framework';
import { homePage } from '../pageObjects/homePage';
import { javaScriptPage } from '../pageObjects/javaScriptPage';
import { NAVIGATION_ITEMS } from '../support/types';

Given(/^the User opens web page (.+)$/, async (webAddress) => {
  await browser.url(webAddress);
});

Then(/^the user sees that the title of the Home page is correct$/, async () => {
  expect(browser).toHaveTitle('W3Schools Online Web Tutorials');
});

Then(
  /^the User sees that the button (.+) contains (.+)$/,
  async (index, text) => {
    const button = await homePage.getButtonsInMainMenu();
    expect(button[index - 1]).toHaveText(text);
  }
);

When(/^the User clicks on the 'Tutorials' button$/, async () => {
  await homePage.clickOnButtonInMainMenuByInnerText(NAVIGATION_ITEMS.TUTORIALS);
});

Then(
  /^the user sees the element '(.+)' on the Tutorials tab$/,
  async (tutorialsHeaderElement: string) => {
    const searchText = await homePage.getTutorialsHeaderElement();
    expect(searchText).toHaveText(tutorialsHeaderElement);
  }
);

When(/^the User clicks the link 'Learn JavaScript'$/, async () => {
  await homePage.clickOnLearnJavaScriptLink();
});

Then(
  /^the User sees that the page is displayed with the title '(.+)'$/,
  async (javaScriptHeaderElement: string) => {
    const searchHeaderElement = await javaScriptPage.getPageHeader();
    expect(searchHeaderElement).toHaveText(javaScriptHeaderElement);
  }
);

When(/^the User clicks on the logo$/, async () => {
  await homePage.clickLogoElement();
});

Then(/^the User sees that the Home page is displayed$/, async () => {
  await homePage.waitForPage();
});

When(/^the User clicks the Google search button$/, async () => {
  await homePage.clickOnGoogleSearchButton();
});

Then(/^the User sees that input field is open/, async () => {
  const fieldInput = await homePage.getGoogleSearchInput();
  expect(fieldInput).toBeDisplayed();
});
