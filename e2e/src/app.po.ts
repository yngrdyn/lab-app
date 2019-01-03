import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavBar() {
    return element(by.tagName('mat-toolbar'));
  }
}

