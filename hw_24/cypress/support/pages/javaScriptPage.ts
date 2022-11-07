import { PAGES } from '../types/types';
import { HomePage } from './homePage';

export class JavaScriptPage extends HomePage {
  constructor() {
    super();

    this.url = '/js/default.asp';
  }

  public getLogoElement() {
    cy.task('log', `Getting the logo on ${PAGES.JAVASCRIPT} page...`);
    return cy.get(`a[href='https://www.w3schools.com']`);
  }
  public clickLogoElement() {
    cy.task('log', `Clicking the logo on ${PAGES.JAVASCRIPT} page...`);
    this.getLogoElement().click();
  }
}
