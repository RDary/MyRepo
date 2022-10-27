import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { baseUrl } from '../support/constants';

export class CSSTutorialPage extends HomePage {
  protected url: string;
  constructor(page: Page) {
    super(page);
    this.url = `${baseUrl}css/default.asp`;
  }

  public async clickLogoElement() {
    await this.page.locator(`//a[@href="https://www.w3schools.com"]`).click();
  }
  // public async visitPage() {
  //   await this.page.goto(this.url);
  // }

  // public async getPageHeader() {
  //   return this.page.locator(
  //     `//div[@class="w3-main w3-light-grey"]//*[text()="JavaScript "]`
  //   );
  // }
}
