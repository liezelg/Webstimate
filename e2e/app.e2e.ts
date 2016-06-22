import { WebstimatePage } from './app.po';

describe('webstimate App', function() {
  let page: WebstimatePage;

  beforeEach(() => {
    page = new WebstimatePage();
  });

//   it('should display message saying app works', () => {
//     page.navigateTo();
//     expect(page.getParagraphText()).toEqual('webstimate works!');
//   });

  describe('webstimate menu burger', function() {

    it('click one on the menu and hide labels', () => {
      page.navigateTo();
      var elToClick=element(by.css('.glyphicon-menu-hamburger'))
      elToClick.click();
      var burgerDiv=element(by.id('burgerDiv'));

      expect(burgerDiv.getAttribute('class')).toEqual('borderHidden');

    });

    it('expands the menu after clicking again', () => {
      var elToClick=element(by.css('.glyphicon-menu-hamburger'))
      elToClick.click();
      var burgerDiv=element(by.id('burgerDiv'));

      expect(burgerDiv.getAttribute('class')).toEqual('border');
    });
  });

});