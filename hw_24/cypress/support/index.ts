/// <reference types="cypress" />
import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
  namespace Cypress {
    interface Chainable {
      getLinkByHrefAttribute(
        cssSelector: string,
        hrefAttribute: string
      ): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
}
