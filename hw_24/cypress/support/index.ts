/// <reference types="cypress" />
import './commands';
import '@shelex/cypress-allure-plugin';
import { Runnable } from 'mocha';

declare global {
  namespace Cypress {
    interface Chainable {
      getSelectorByHrefAttribute(
        cssSelector: string,
        hrefAttribute: string
      ): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
}
