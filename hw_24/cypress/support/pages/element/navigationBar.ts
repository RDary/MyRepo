import { NAVIGATION_ITEMS } from '../../types/types';

export class NavigationBar {
  constructor() {}

  public getNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
    return cy
      .get(
        `a[class*='w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24']`
      )
      .contains(itemText);
  }
  public clickNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
    this.getNavigationItemByInnerText(itemText).click();
  }

  public getHeaderElement() {
    return cy.get('b').first();
  }
  public waitForHeaderElement(headerText: string) {
    this.getHeaderElement().should('have.text', headerText);
  }
}
