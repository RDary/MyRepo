import { NavigationBar } from './element/navigationBar';

export class BasePage {
  protected url!: string;

  public navigationBar: NavigationBar;

  constructor() {
    this.navigationBar = new NavigationBar();
  }

  public visitPage() {
    cy.visit(this.url);
  }

  public getPageTitle() {
    return cy.title();
  }

  public waitForTitleToIncludeText(titleText: string) {
    this.getPageTitle().should('include', titleText);
  }

  public waitUrlToContain(url: string) {
    cy.url().should('include', url);
  }
}
