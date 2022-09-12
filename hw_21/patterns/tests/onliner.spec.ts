import { mkdirSync, rmSync, writeFile } from 'fs';
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Context } from 'mocha';
import { CatalogPage } from '../pageObjects/catalogPage';
import { NAVIGATION_ITEMS, PAGES, QUERY_STRING } from '../utils/types';
import { PageFactory } from '../pageObjects/pageFactory';
import { ForumPage } from '../pageObjects/forumPage';
import { baseUrl } from '../utils/constants';

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const screensDir = 'hw_21/patterns/screenshots';
let testsCounter = 1;
const titleOfHomePage = 'Onliner';
const searchPlaceholderText = 'Поиск в Каталоге.';

const homePage = PageFactory.getPage(driver, PAGES.HOME);
const catalogPage = PageFactory.getPage(driver, PAGES.CATALOG) as CatalogPage;
const forumPage = PageFactory.getPage(driver, PAGES.FORUM) as ForumPage;

describe('Tests of the site Onliner', function () {
  before(function () {
    rmSync(screensDir, { recursive: true, force: true });
    mkdirSync(screensDir, { recursive: true });
  });

  it('Should display the title of Home page correctly', async function () {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    await homePage.waitForTitleIs(titleOfHomePage);
    const searchNamePage = await homePage.getNameOfPage();
    await homePage.highlightElement(searchNamePage);
  });

  it(`When User clicks link ${NAVIGATION_ITEMS.FORUM}, correct page is displayed with the title of article ${NAVIGATION_ITEMS.FORUM}`, async function () {
    await homePage.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.FORUM);
    const searchNameText = await forumPage.getNameOfPage();
    await forumPage.highlightElement(searchNameText);
  });

  it('When User clicks on the logo of site, the home page is displayed', async function () {
    await forumPage.clickLogoText();
    await homePage.waitForUrlToContain(baseUrl);
  });

  it(`When User clicks ${NAVIGATION_ITEMS.CATALOG}, the page is displayed with title including ${NAVIGATION_ITEMS.CATALOG}`, async function () {
    await homePage.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.CATALOG);
    await catalogPage.waitForTitleToContain(NAVIGATION_ITEMS.CATALOG);
  });

  it(`The home page contains search form with placeholder including text '${searchPlaceholderText}'`, async function () {
    await catalogPage.clickLogoText();
    const searchElement = await homePage.getSearchInput();
    await homePage.highlightElement(searchElement);
    await homePage.waitForAttribureOfElementContains(
      searchElement,
      searchPlaceholderText
    );
  });

  it('Should fill the search field and then load search page', async () => {
    await homePage.getSearchInput();
    await homePage.searchFor(QUERY_STRING.LAPTOPS);
  });

  afterEach(async function () {
    const data = await driver.takeScreenshot();
    const base64Data = data.replace(/^data:image\/png;base64,/, '');
    writeFile(
      `${screensDir}/${testsCounter++}.${
        (this as Context).currentTest?.title
      }.png`,
      base64Data,
      'base64',
      function (err) {
        if (err) console.log(err.message);
      }
    );
  });
});

after(async () => {
  await catalogPage.quitBrowser();
});
