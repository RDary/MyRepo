import { HomePage } from './homePage';

class JavaScriptPage extends HomePage {
  constructor() {
    super();
  }

  public getPageHeader = async () => {
    return await $(
      `//div[@class="w3-main w3-light-grey"]//*[text()="JavaScript "]`
    );
  };
}
export const javaScriptPage = new JavaScriptPage();
