import { WebDriver, Key } from 'selenium-webdriver';
import { baseUrl, defaultWaitingTime } from '../utils/constants';
import { NAVIGATION_ITEMS, SELECTOR_TYPES } from '../utils/tytpes';
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

  public async getNavigationItemByJavaScriptt() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//a[@href="/js/default.asp"]`
    );
  }

  public async clickOnNavigationItemByJavaScript() {
    await (await this.getNavigationItemByJavaScriptt()).click();
  }

  public async getTutorialsHeaderInnerText() {
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
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.ID,
      'googleSearch'
    );
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

  public async searchForInput(text: string) {
    await this.driver
      .actions()
      .click(await this.getSearchInput())
      .sendKeys(text)
      .pause(defaultWaitingTime)
      .sendKeys(Key.RETURN)
      .perform();
  }
}
