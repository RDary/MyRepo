import { mkdirSync, rmSync, writeFile } from 'fs';
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Context } from 'mocha';
import { expect } from 'chai';
import { JAVASCRIPT_ITEMS, NAVIGATION_ITEMS, PAGES } from '../utils/tytpes';
import { PageFactory } from '../pageObjects/pageFactory';
import { JavaScriptPage } from '../pageObjects/javaScriptPage';
import { baseUrl } from '../utils/constants';

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const screensDir = 'hw_21_w3schools/patterns/screenshots';
let testsCounter = 1;
const titleOfHomePage = 'W3Schools Online Web Tutorials';

const homePage = PageFactory.getPage(driver, PAGES.HOME);
const javaScriptPage = PageFactory.getPage(
  driver,
  PAGES.JAVASCRIPT
) as JavaScriptPage;

describe('Tests of the site w3schools', function () {
  before(function () {
    rmSync(screensDir, { recursive: true, force: true });
    mkdirSync(screensDir, { recursive: true });
  });

  it('Should display the title of Home page correctly', async function () {
    await homePage.visitPage();
    await homePage.maximizeWindow();
    expect(await homePage.waitForTitleIs(titleOfHomePage));
  });

  it('When User clicks on Tutorials button the Tutorials Items should open', async function () {
    await homePage.getNavigationItemByInnerText(NAVIGATION_ITEMS.TUTORIALS);
    await homePage.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.TUTORIALS);
    const searchText = await homePage.getTutorialsHeaderInnerText();
    expect(await homePage.highlightElement(searchText));
  });

  it(`When User clicks link ${JAVASCRIPT_ITEMS.LEARNJAVASCRIPT}, correct page is displayed with the title ${JAVASCRIPT_ITEMS.LEARNJAVASCRIPT}`, async function () {
    await homePage.clickOnNavigationItemByJavaScript();
    const searchTextOnJavascriptPage =
      await javaScriptPage.getPageHeaderOnJavascriptPage();
    expect(await javaScriptPage.highlightElement(searchTextOnJavascriptPage));
  });

  it('When User clicks on the logo, the home page is displayed', async function () {
    await javaScriptPage.clickLogoElement();
    expect(await homePage.waitUrlToContain(baseUrl));
  });

  it('The home page contains Google search button', async function () {
    await homePage.getGoogleSearchButton();
    await homePage.clickOnGoogleSearchButton();
    expect(await homePage.getGoogleSearchInput());
  });

  it(`The home page contains search form with the text 'Search our tutorials, e.g. HTML'`, async function () {
    await homePage.getSearchInput();
    let QUERY_STRING = 'CSS Tutorial';
    expect(await homePage.searchForInput(QUERY_STRING));
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
  await homePage.quitBrowser();
});