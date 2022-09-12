import { WebDriver } from 'selenium-webdriver';
import { baseCatalogUrl } from '../utils/constants';
import { SELECTOR_TYPES } from '../utils/types';
import { HomePage } from './homePage';

export class CatalogPage extends HomePage {
  protected url: string;
  constructor(driver: WebDriver) {
    super(driver);

    this.url = baseCatalogUrl;
  }

  public async getSideNavigationItemByInnerText(text: string) {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//ul[@class="catalog-navigation-classifier"]//*[text()="${text}"]`
    );
  }

  public async clickSideNavigationItemByInnerText(text: string) {
    await (await this.getSideNavigationItemByInnerText(text)).click();
  }
}
