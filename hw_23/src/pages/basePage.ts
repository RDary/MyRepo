import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  public async waitForTitleToBe(title: string | RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  public async waitUrlToContain(text: string) {
    await expect(this.page).toHaveURL(text);
  }

  public async visitPage(text: string) {
    await this.page.goto(text);
  }
}
