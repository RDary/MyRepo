import { expect } from 'chai';
import { mkdirSync, rmSync, writeFile } from 'fs';
import { Builder, Capabilities, By, until, Key } from 'selenium-webdriver';
import { Context } from 'mocha';

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const baseUrl = 'https://www.w3schools.com/';
const titleOfHomePage = 'W3Schools Online Web Tutorials';
const textForTutorials = 'Tutorials';

const screensDir = 'hw_19/selenium-tests/screenshots';
let testsCounter = 1;
const defaultWaitingTime = 5000;

describe('Tests of the site w3schools', async function () {
  before(function () {
    rmSync(screensDir, { recursive: true, force: true });
    mkdirSync(screensDir, { recursive: true });
  });

  it('Should display the title of Home page correctly', async function () {
    await driver.manage().window().maximize();
    await driver.get(baseUrl);
    expect(await driver.getTitle()).to.equal(titleOfHomePage);
  });

  it(`When User clicks on ${textForTutorials} button the ${textForTutorials} Items should be opened`, async function () {
    await driver
      .findElement(
        By.xpath(
          `//div[@class="w3-bar w3-card-2 notranslate"]//*[text()="${textForTutorials} "]`
        )
      )
      .click();
    const searchElement = await driver.findElement(By.xpath('//h2/b'));
    await driver.executeScript(
      "arguments[0].setAttribute('style', 'background: #fc0fc0;')",
      searchElement
    );
    expect(await searchElement.getText()).to.be.equal(`${textForTutorials}`);
  });

  it(`When User clicks the link 'Learn JavaScript', correct page is displayed with the title 'JavaScript Tutorials'`, async function () {
    await driver.findElement(By.xpath('//a[@href="/js/default.asp"]')).click();
    const elementOnJavascriptPage = await driver.wait(
      until.elementLocated(
        By.xpath(
          `//div[@class="w3-main w3-light-grey"]//*[text()="JavaScript "]`
        )
      )
    );
    await driver.executeScript(
      "arguments[0].setAttribute('style', 'background: #fc0fc0;')",
      elementOnJavascriptPage
    );
    expect(await elementOnJavascriptPage.getText()).to.be.include(
      'JavaScript Tutorial'
    );
  });

  it('When User clicks on the logo, the home page is displayed', async function () {
    await driver
      .findElement(By.xpath('//a[@href="https://www.w3schools.com"]'))
      .click();
    await driver.wait(until.urlContains(baseUrl), defaultWaitingTime);
  });

  it(`The home page contains Google search button`, async () => {
    await driver
      .findElement(
        By.className(
          'w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav'
        )
      )
      .click();
    await driver.wait(
      until.elementsLocated(By.id('googleSearch')),
      defaultWaitingTime
    );
  });

  it('Should fill the search field and then load search page', async () => {
    const fieldSearch = await driver.findElement(By.id(`search2`));
    await fieldSearch.click();
    const queryString = 'CSS Tutorial';
    await fieldSearch.sendKeys(queryString);
    const fieldValue = await driver
      .findElement(By.id(`search2`))
      .getAttribute('value');
    expect(fieldValue).to.eq(queryString);
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
  await driver.quit();
});
