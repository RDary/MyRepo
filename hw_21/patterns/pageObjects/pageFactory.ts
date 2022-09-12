import { WebDriver } from 'selenium-webdriver';
import { PAGES } from '../utils/types';
import { CatalogPage } from './catalogPage';
import { HomePage } from './homePage';
import { ForumPage } from './forumPage';

export class PageFactory {
  constructor() {}

  static getPage(driver: WebDriver, pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage(driver);
      case PAGES.CATALOG:
        return new CatalogPage(driver);
      case PAGES.FORUM:
        return new ForumPage(driver);
      default:
        return new HomePage(driver);
    }
  }
}
