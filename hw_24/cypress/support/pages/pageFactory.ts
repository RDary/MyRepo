import { PAGES } from '../types/types';
import { HomePage } from './homePage';
import { JavaScriptPage } from './javaScriptPage';

export class PageFactory {
  static getPage(pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage();
      case PAGES.JAVASCRIPT:
        return new JavaScriptPage();
      default:
        return new HomePage();
    }
  }
}
