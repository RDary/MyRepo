import { PageFactory } from '../support/pages/pageFactory';
import { PAGES } from '../support/types/types';
import { JavaScriptPage } from '../support/pages/javaScriptPage';
import { baseUrl } from '../support/constants/constants';

const homePage = PageFactory.getPage(PAGES.HOME);
const javaScriptPage = PageFactory.getPage(PAGES.JAVASCRIPT) as JavaScriptPage;

describe('W3schools site tests - JavaScript page', () => {
  it('When User clicks on the logo, the Home page should be opened', () => {
    cy.task('log', `Opening the ${PAGES.JAVASCRIPT} page...`);
    javaScriptPage.visitPage();
    javaScriptPage.clickLogoElement();
    homePage.waitUrlToContain(baseUrl);
  });
});
