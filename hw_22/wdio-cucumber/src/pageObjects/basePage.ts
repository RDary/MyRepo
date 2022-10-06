export class BasePage {
  get PageTitle() {
    return browser.getTitle();
  }

  get CurrentUrl() {
    return browser.getUrl();
  }
}
