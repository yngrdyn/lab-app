import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentURL() {
    return browser.getCurrentUrl();
  }

  getNavBar() {
    return element(by.tagName('mat-toolbar'));
  }

  getHomeTitle() {
    return element(by.css('app-home h1'));
  }

  getNavBarLogo() {
   return element(by.css('img[src="https://crewservices.vueling.com/Vueling.CREW.SSO.WebUI/Content/img/crewLogo.png"]'));
  }

  getNavBarUserIcon() {
    return element(by.css('.mat-primary.mat-icon-button'));
  }

  getUserIconMenu() {
    return element(by.css('.mat-menu-panel'));
  } 

  getUserIconMenuOption() {
    return element(by.css('.mat-menu-panel span'));
  }  

  clickUserIcon() {
    let button = this.getNavBarUserIcon();
    button.click();
  }

  clickUserIconMenuOption() {
    browser.executeScript(`
        const button = document.querySelector(
            'button[ng-reflect-router-link="/preferences"]'
        );
        button.click();`
    );
  } 

  openDialog(){
    return element(by.css('app-home button')).click();
  } 

  getDialog(){
    browser.sleep(100);
    return element(by.id('mat-dialog-0')); 
  }

  getDialogTitle(){
    return element(by.css('mat-dialog-container .mat-dialog-title'));   
  }

  getDialogContent(){
    return element(by.css('mat-dialog-container mat-dialog-content p'));   
  }

  getDialogCloseButton(){
    return element(by.css('mat-dialog-container mat-dialog-actions .mat-raised-button'));   
  }

  clickDialogCloseButton(){
    return element(by.css('mat-dialog-container mat-dialog-actions .mat-raised-button')).click();
  } 

  getMessagesTable(){
    return element(by.css('app-home mat-table'));   
  }

  getMessagesTableColumns(){
    return element.all(by.css('app-home mat-table mat-header-row mat-header-cell'));   
  }

  getMessagesTableRows(){
    return element.all(by.css('app-home mat-table mat-row'));   
  }

  getHomeInput(){
    return element(by.css('app-home .mat-input-element'));   
  }


}