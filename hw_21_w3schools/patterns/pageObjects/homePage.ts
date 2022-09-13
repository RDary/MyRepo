import { WebDriver, WebElement, Key } from 'selenium-webdriver';
import { baseUrl, defaultWaitingTime, logoOfSite } from '../utils/constants';
import {
  JAVASCRIPT_ITEMS,
  NAVIGATION_ITEMS,
  SELECTOR_TYPES,
} from '../utils/tytpes';
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

  public async getOnNavigationItemByJavaScriptt(item: JAVASCRIPT_ITEMS) {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//a[@href="/js/default.asp"]`
    );
  }

  public async clickOnNavigationItemByJavaScript(item: JAVASCRIPT_ITEMS) {
    await (await this.getOnNavigationItemByJavaScriptt(item)).click();
  }

  public async getTextAfterClickTutorials() {
    return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//h2/b`);
  }

  public async getSearchInput() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      '//a[@class="w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav"]'
    );
  }

  public async searchForInput() {
    await this.driver
      .actions()
      .click(await this.getSearchInput())
      .perform();
  }

  public async getLogoText() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//a[@href="${logoOfSite}"]`
    );
  }

  public async clickLogoText() {
    await (await this.getLogoText()).click();
  }

  public async getSearchInputWithPlaceholder() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.CLASSNAME,
      'example'
    );
  }

  public async searchForInputWithPlaceholder(text: string) {
    await this.driver
      .actions()
      .click(await this.getSearchInputWithPlaceholder())
      .sendKeys(text)
      .pause(defaultWaitingTime)
      .sendKeys(Key.RETURN)
      .perform();
  }
}
