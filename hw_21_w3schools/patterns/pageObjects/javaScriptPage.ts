import { WebDriver } from 'selenium-webdriver';
import { baseUrl } from '../utils/constants';
import { SELECTOR_TYPES } from '../utils/tytpes';
import { HomePage } from './homePage';

export class JavaScriptPage extends HomePage {
  protected url: string;
  constructor(driver: WebDriver) {
    super(driver);

    this.url = `${baseUrl}/js/default.asp`;
  }

  public async getTextOnJavascriptPage() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.XPATH,
      `//div[@class="w3-main w3-light-grey"]//*[text()="JavaScript "]`
    );
  }
}
