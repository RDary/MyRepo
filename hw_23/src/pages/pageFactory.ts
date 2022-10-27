import { Page } from '@playwright/test';
import { PAGES } from '../support/types';
import { HomePage } from './homePage';
import { CSSTutorialPage } from './cssTutorialPage';

export class PageFactory {
  static getPage(page: Page, pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage(page);
      case PAGES.CSSTUTORIAL:
        return new CSSTutorialPage(page);
      default:
        return new HomePage(page);
    }
  }
}
