import { PageFactory } from '../support/pages/pageFactory';
import {
  NAVIGATION_ITEMS,
  JAVASCRIPT_ITEMS,
  PAGES,
} from '../support/types/types';

const homePage = PageFactory.getPage(PAGES.HOME);

describe('W3schools site tests - Home page', () => {
  before(() => {
    homePage.visitPage();
  });

  it('Should display the title of Home page correctly', () => {
    homePage.waitForTitleToIncludeText('W3Schools Online Web Tutorials');
  });

  it('The home page contains Google search button', () => {
    homePage.clickGoogleSearchInput();
    homePage.waitForGoogleSearchInput();
  });

  it('When User clicks on the Tutorials button the Tutorials Items should be opened', () => {
    homePage.navigationBar.clickNavigationItemByInnerText(
      NAVIGATION_ITEMS.TUTORIALS
    );
    homePage.navigationBar.waitForHeaderElement('Tutorial');
  });

  it(`When User clicks link ${JAVASCRIPT_ITEMS.LEARNJAVASCRIPT}, correct page is displayed with the title ${JAVASCRIPT_ITEMS.LEARNJAVASCRIPT}`, () => {
    cy.intercept(
      'GET',
      'https://c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js'
    ).as('aps_csm.js');

    homePage.clickLearnJavaScriptLink();
    cy.wait('@aps_csm.js').then((data) => {
      expect(data.response?.statusCode).to.equal(200);
    });
    homePage.waitForTitleToIncludeText('JavaScript Tutorial');
  });
});
