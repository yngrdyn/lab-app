import { browser, by, element } from 'protractor';

export class PreferencesPage {
  navigateTo() {
    return browser.get('/preferences');
  }

  getCurrentURL() {
    return browser.getCurrentUrl();
  }

  getPreferencesMainTitle() {
    return element(by.css('.mat-drawer-content h1'));
  }

  clickNavBarLogo(){
    return element(by.css('img[src="https://crewservices.vueling.com/Vueling.CREW.SSO.WebUI/Content/img/crewLogo.png"]')).click();
  }

  getPreferencesDropdowns() {
    return element.all(by.css('.wrapper mat-select'));
  }

  getPreferencesSideBarOptions() {
    return element.all(by.css('.mat-drawer-inner-container a span'));
  } 

  clickSidenavFirstOption(){
    var options = element.all(by.css('.mat-drawer-inner-container a'));
    return options.get(0).click();
  }

  async clickSidenavSecondOption(){
    let options = element.all(by.css('.mat-drawer-inner-container a'));
    return options.get(1).click();
  }

  clickPreferencesFirstOption(){
    return element.all(by.css('.wrapper mat-select')).get(0).click();
  }

  clickPreferencesSecondOption(){
    return element.all(by.css('.wrapper mat-select')).get(1).click();
  }

  clickDropdownFirstOption(){
    return element.all(by.css('mat-option')).get(0).click();
  }

  getDropdownOptions(){
    return element.all(by.css('mat-option'));
  }

  getClickButton(){
    return element(by.css('.actions button'));
  }

}