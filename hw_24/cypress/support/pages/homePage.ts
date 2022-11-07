import { PAGES } from '../types/types';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  constructor() {
    super();

    this.url = ' ';
  }

  public clickLearnJavaScriptLink() {
    cy.task('log', `Clicking Learn JavaScript link on ${PAGES.HOME} page...`);
    cy.getSelectorByHrefAttribute('a', '/js/default.asp').first().click();
  }

  public clickGoogleSearchButton() {
    cy.task('log', `Clicking Google Search button on ${PAGES.HOME} page...`);
    cy.get(
      `a[class='w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav']`
    ).click();
  }
  public waitForGoogleSearchInput() {
    cy.task('log', `Waiting for Google Search input on ${PAGES.HOME} page...`);
    cy.get(`input[class='gsc-input']`).should('be.visible');
  }
}
