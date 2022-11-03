/// <reference types="cypress" />
import './commands';

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
