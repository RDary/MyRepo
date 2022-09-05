import { expect } from 'chai';
import { writeFile } from 'fs';
import { Builder, Capabilities, By, until, Key } from 'selenium-webdriver';
import { Context } from 'mocha';

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const baseUrl = 'https://www.onliner.by/';
const titleOfHomePage = 'Onliner';
const textForAutoCompr = 'Автомобильные компрессоры';
const catalogIncludingText = 'Каталог';
const searchPlaceholderText = 'Поиск в Каталоге.';

const screensDir = 'hw_19/selenium/screenshots';
let testsCounter = 1;
const defaultWaitingTime = 5000;

describe('Tests of the site Onliner', async function () {
  before(async () => {
    await driver.manage().window().maximize();
    await driver.get(baseUrl);
  });

  it('Should display the title of Home page correctly', async function () {
    await driver.wait(until.elementLocated(By.css('.onliner_logo')));
    expect(await driver.getTitle()).to.equal(titleOfHomePage);
  });

  it(`When User clicks link ${textForAutoCompr}, correct page is displayed with the title of article ${textForAutoCompr}`, async function () {
    await driver.findElement(By.linkText(textForAutoCompr)).click();
    const pageHeader = await driver.findElement(
      By.className('schema-header__title js-schema-header_title')
    );
    expect(await pageHeader.getText()).to.equal(textForAutoCompr);
    await driver.executeScript('arguments[0].scrollIntoView(true)', pageHeader);
  });

  it('When User clicks on the logo of site, the Home page is displayed', async function () {
    await driver.findElement(By.className('b-top-logo')).click();
    await driver.wait(until.urlContains(baseUrl), defaultWaitingTime);
  });

  it(`When User clicks ${catalogIncludingText}, the page is displayed with title including ${catalogIncludingText}`, async function () {
    await driver.findElement(By.linkText(catalogIncludingText)).click();
    expect(await driver.getTitle()).to.include(catalogIncludingText);
  });

  it(`The Home page contains search form with with placeholder including text ${searchPlaceholderText}`, async function () {
    await driver.findElement(By.className('b-top-logo')).click();
    const searchElement = await driver.findElement(
      By.xpath('//form[@class="fast-search__form"]/input[@type="text"]')
    );
    expect(await searchElement.getAttribute('placeholder')).to.include(
      searchPlaceholderText
    );
    await driver.executeScript(
      "arguments[0].setAttribute('style', 'background: #91c3f2;')",
      searchElement
    );
  });

  it('Should fill the search field and then load search page', async () => {
    const fieldSearch = await driver.findElement(
      By.className('fast-search__input')
    );
    await fieldSearch.click();
    const queryString = 'Ноутбуки';
    await fieldSearch.sendKeys(queryString);
    const fieldValue = await driver
      .findElement(By.className('fast-search__input'))
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
