import { WebDriver } from 'selenium-webdriver';
import { baseForumUrl } from '../utils/constants';
import { SELECTOR_TYPES } from '../utils/types';
import { HomePage } from './homePage';

export class ForumPage extends HomePage {
  protected url: string;
  constructor(driver: WebDriver) {
    super(driver);

    this.url = baseForumUrl;
  }

  public async getNameOfPage() {
    return await this.driverUtils.findElement(
      SELECTOR_TYPES.CLASSNAME,
      `m-title`
    );
  }

  public async getTextNameOfPage() {
    return (await this.getNameOfPage()).getText();
  }
}
