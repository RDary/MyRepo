import { HomePage } from './homePage';

export class JavaScriptPage extends HomePage {
  constructor() {
    super();

    this.url = '/js/default.asp';
  }

  public getLogoElement() {
    return cy.get(`a[href='https://www.w3schools.com']`);
  }
  public clickLogoElement() {
    this.getLogoElement().click();
  }
}
