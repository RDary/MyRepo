import { BasePage } from './basePage';

export class HomePage extends BasePage {
  constructor() {
    super();

    this.url = ' ';
  }

  public getLearnJavaScriptLink() {
    return cy.get(`a[href='/js/default.asp']`).first();
  }
  public clickOnLearnJavaScriptLink() {
    this.getLearnJavaScriptLink().click();
  }

  public clickGoogleSearchInput() {
    return cy
      .get(
        `a[class='w3-bar-item w3-button bar-icon-hover w3-right w3searchbtntopnav']`
      )
      .click();
  }
  public waitForGoogleSearchInput() {
    cy.get(`input[class='gsc-input']`).should('be.visible');
  }
}
