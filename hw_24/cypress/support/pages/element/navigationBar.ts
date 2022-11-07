import { NAVIGATION_ITEMS } from '../../types/types';

export class NavigationBar {
  constructor() {}

  public getNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
    cy.task(
      'log',
      `Getting navigation ${itemText} items by inner text from navigation bar...`
    );
    return cy
      .get(
        `a[class*='w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24']`
      )
      .contains(itemText);
  }
  public clickNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
    cy.task(
      'log',
      `Clicking navigation ${itemText} item by inner text from navigation bar...`
    );
    this.getNavigationItemByInnerText(itemText).click();
  }

  public getHeaderElement() {
    cy.task('log', `Getting header element...`);
    return cy.get('b').first();
  }
  public waitForHeaderText(headerText: string) {
    cy.task('log', `Waiting for ${headerText} header text...`);
    this.getHeaderElement().should('have.text', headerText);
  }
}
