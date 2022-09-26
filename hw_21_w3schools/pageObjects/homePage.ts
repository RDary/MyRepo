import { until, WebDriver, Key, By, WebElement } from 'selenium-webdriver';
import { baseUrl, defaultWaitingTime } from '../utils/constants';
import { NAVIGATION_ITEMS, SELECTOR_TYPES } from '../utils/types';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  protected url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = baseUrl;
  }

  public async visitPage() {
    await this.driver.get(this.url);
  }

  public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//div[@class="w3-bar w3-card-2 notranslate"]//*[text()="${item} "]`
    );
  }

  public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    await (await this.getNavigationItemByInnerText(item)).click();
  }

  public async getLearnJavaScriptLink() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//a[@href="/js/default.asp"]`
    );
  }

  public async clickOnLearnJavaScriptLink() {
    await (await this.getLearnJavaScriptLink()).click();
  }

  public async getTutorialsHeaderElement() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//h2/b`);
  }

  public async getGoogleSearchButton() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      '//a[@class="w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav"]'
    );
  }

  public async clickOnGoogleSearchButton() {
    await this.driver
      .actions()
      .click(await this.getGoogleSearchButton())
      .perform();
  }

  public async waitForGoogleSearchInput() {
    await this.driver.wait(until.elementsLocated(By.id('googleSearch')), 3000);
  }

  public async getLogoElement() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//a[@href="https://www.w3schools.com"]`
    );
  }

  public async clickLogoElement() {
    await (await this.getLogoElement()).click();
  }

  public async getSearchInput() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.CLASSNAME,
      'example'
    );
  }

  public async searchFor(text: string) {
    await this.driver
      .actions()
      .click(await this.getSearchInput())
      .sendKeys(text)
      .pause(defaultWaitingTime)
      .sendKeys(Key.RETURN)
      .perform();
  }
}
