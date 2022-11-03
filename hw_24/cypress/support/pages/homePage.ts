import { BasePage } from './basePage';

export class HomePage extends BasePage {
  constructor() {
    super();

    this.url = ' ';
  }

  public clickLearnJavaScriptLink() {
    cy.getLinkByHrefAttribute('a', '/js/default.asp').first().click();
  }

  public clickGoogleSearchInput() {
    cy.get(
      `a[class='w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav']`
    ).click();
  }
  public waitForGoogleSearchInput() {
    cy.get(`input[class='gsc-input']`).should('be.visible');
  }
}
