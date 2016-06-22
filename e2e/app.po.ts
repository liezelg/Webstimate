export class WebstimatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('webstimate-app h1')).getText();
  }
}
