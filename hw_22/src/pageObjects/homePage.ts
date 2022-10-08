import { NAVIGATION_ITEMS } from '../support/types';
import { BasePage } from '../pageObjects/basePage';
import { baseUrl } from '../support/constants';

export class HomePage extends BasePage {
  constructor() {
    super();
  }

  public getButtonsInMainMenu = () =>
    $$(
      `w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24`
    );

  public clickOnButtonInMainMenuByInnerText = async (
    item: NAVIGATION_ITEMS
  ) => {
    await (
      await $(
        `//div[@class="w3-bar w3-card-2 notranslate"]//*[text()="${item} "]`
      )
    ).click();
  };

  public getTutorialsHeaderElement = () => $(`//h2/b`);

  public clickOnLearnJavaScriptLink = async () => {
    await (await $(`//a[@href="/js/default.asp"]`)).click();
  };

  public clickLogoElement = async () => {
    await (await $('//a[@href="https://www.w3schools.com"]')).click();
  };

  public waitForPage = async () => {
    await browser.waitUntil(async () => {
      return (await browser.getUrl()) === `${baseUrl}`;
    });
  };

  public clickOnGoogleSearchButton = async () => {
    await (
      await $(
        '//a[@class="w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav"]'
      )
    ).click();
  };

  public getGoogleSearchInput = async () => {
    return await $(`//input[@type='text']`);
  };
}

export const homePage = new HomePage();
