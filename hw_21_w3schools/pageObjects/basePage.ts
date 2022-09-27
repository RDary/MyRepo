import { By, until, WebDriver, WebElement } from 'selenium-webdriver';
import { DriverUtils } from '../utils/driverUtils';

export class BasePage {
  protected driverUtils: DriverUtils;

  constructor(protected readonly driver: WebDriver) {
    this.driverUtils = new DriverUtils(driver);
  }

  public async maximizeWindow() {
    await this.driver.manage().window().maximize();
  }

  public async getPageTitle() {
    return await this.driver.getTitle();
  }

  public async quitBrowser() {
    await this.driver.quit();
  }

  public async waitForTitleIs(title: string) {
    await this.driver.wait(until.titleIs(title));
  }

  public async waitUrlToContain(text: string) {
    await this.driver.wait(until.urlContains(text));
  }

  public async highlightElement(element: WebElement) {
    await this.driver.executeScript(
      "arguments[0].setAttribute('style', 'background: #fc0fc0;')",
      element
    );
  }
}
