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

  public getpageTitle() {
    return cy.title();
  }

  public waitForTitleToIncludeText(titleText: string) {
    this.getpageTitle().should('include', titleText);
  }

  public waitUrlToContain(url: string) {
    cy.url().should('contain', url);
  }
}
