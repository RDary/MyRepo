import { test } from '@playwright/test';
import { CSSTutorialUrl, titleOfHomePage } from '../src/support/constants';
import { PageFactory } from '../src/pages/pageFactory';
import { PAGES } from '../src/support/types';
import { CSSTutorialPage } from '../src/pages/cssTutorialPage';

test.describe.configure({ mode: 'serial' });

test.describe('W3schools site tests - the logo on the CSS Page', async () => {
  test('When User clicks on the logo, the Home page is displayed', async ({
    page,
  }) => {
    const cSSTutorialPage = PageFactory.getPage(
      page,
      PAGES.CSSTUTORIAL
    ) as CSSTutorialPage;
    const homePage = PageFactory.getPage(page, PAGES.HOME);
    await cSSTutorialPage.visitPage(CSSTutorialUrl);
    await cSSTutorialPage.clickLogoElement();
    await homePage.waitForTitleToBe(titleOfHomePage);
  });
});
