import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { PageFactory } from '../src/pages/pageFactory';
import {
  baseUrl,
  CSSTutorialUrl,
  titleOfHomePage,
} from '../src/support/constants';
import { NAVIGATION_ITEMS, PAGES } from '../src/support/types';

test.describe.configure({ mode: 'serial' });

let homePage: HomePage;

test.describe('W3schools site tests', async () => {
  test.beforeEach(async ({ page }) => {
    homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
    await homePage.visitPage(baseUrl);
  });

  test('Should display the title of Home page correctly', async () => {
    await homePage.waitForTitleToBe(titleOfHomePage);
  });

  test('When User clicks on the Tutorials button the Tutorials Items should be opened', async () => {
    await homePage.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.TUTORIALS);
    await homePage.waitForTutorialsHeaderElement();
  });

  test('The home page contains Google search button', async () => {
    await homePage.clickOnGoogleSearchButton();
    await homePage.waitForGoogleSearchInput();
  });

  test('Should fill the search form with the text "Search our tutorials, e.g. HTML" and then load search page', async () => {
    await homePage.searchFor();
    await homePage.waitUrlToContain(CSSTutorialUrl);
  });
});
