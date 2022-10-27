import { Page, expect } from '@playwright/test';
import { baseUrl } from '../support/constants';
import { BasePage } from './basePage';
import { NAVIGATION_ITEMS } from '../support/types';

export class HomePage extends BasePage {
  protected url: string;
  constructor(page: Page) {
    super(page);
    this.url = baseUrl;
  }

  public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    return this.page.locator(
      `//div[@class="w3-bar w3-card-2 notranslate"]//*[text()="${item} "]`
    );
  }

  public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
    await (await this.getNavigationItemByInnerText(item)).click();
  }

  public async getTutorialsHeaderElement() {
    return this.page.locator(`//h2/b`).first();
  }
  public async waitForTutorialsHeaderElement() {
    await expect(await this.getTutorialsHeaderElement()).toHaveText(
      NAVIGATION_ITEMS.TUTORIALS
    );
  }

  public async clickOnGoogleSearchButton() {
    await this.page
      .locator(
        '//a[@class="w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav"]'
      )
      .click();
  }

  public async waitForGoogleSearchInput() {
    const googleSearchInput = this.page.locator('//input').first();
    await expect(googleSearchInput).toBeVisible();
  }

  public async searchFor() {
    const searchLocator = `//form[@class='example']`;
    await this.page.locator(searchLocator).click();
    await this.page.locator(searchLocator).type('CSS Tutorial', { delay: 50 });
    await this.page.keyboard.press('Enter');
  }
}
