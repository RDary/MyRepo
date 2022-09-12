import { Key, WebDriver } from 'selenium-webdriver';
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

  public async getNameOfPage() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.CLASSNAME,
      `onliner_logo`
    );
  }

  public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//nav[@class="b-top-navigation"]//*[text()="${item}"]`
    );
  }

  public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    await (await this.getNavigationItemByInnerText(item)).click();
  }

  public async getSearchInput() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      '//form[@class="fast-search__form"]/input[@type="text"]'
    );
  }

  public async getSearchInputAttribute(text: string) {
    return (await this.getSearchInput()).getAttribute(text);
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

  public async getLogoText() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.CLASSNAME,
      'b-top-logo'
    );
  }

  public async clickLogoText() {
    await (await this.getLogoText()).click();
  }
}
