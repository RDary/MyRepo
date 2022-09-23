import { WebDriver } from 'selenium-webdriver';
import { PAGES } from '../utils/tytpes';
import { HomePage } from './homePage';
import { JavaScriptPage } from './javaScriptPage';

export class PageFactory {
  constructor() {}

  static getPage(driver: WebDriver, pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage(driver);
      case PAGES.JAVASCRIPT:
        return new JavaScriptPage(driver);
      default:
        return new HomePage(driver);
    }
  }
}
