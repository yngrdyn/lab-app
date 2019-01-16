import { PreferencesPage } from './preferences.po';

describe('Preferences page', () => {
    let page: PreferencesPage;
  
    beforeEach(() => {
      page = new PreferencesPage();
      page.navigateTo();
    });

    it('preferences page title should be "Garantías y turnos" ', () => {
        expect(page.getPreferencesMainTitle().getText()).toBe('Garantías y turnos');
    });

    it('preferences page content should show two dropdowns', () => {
        expect(page.getPreferencesDropdowns().count()).toBe(2);
    }); 

    it('preferences page returns to home after logo click', () => {
        page.clickNavBarLogo();
        expect(page.getCurrentURL()).toEqual('http://localhost:4200/');
    });

});


describe('Preferences page sidenav', () => {
    let page: PreferencesPage;
  
    beforeEach(() => {
      page = new PreferencesPage();
      page.navigateTo();
    });

    it('preferences sidenav should show two options ', () => {
        expect(page.getPreferencesSideBarOptions().count()).toBe(2);
    });

    it('preferences sidenav should show "Garantías y turnos" as first option', () => {
        expect(page.getPreferencesSideBarOptions().get(0).getText()).toContain('Garantías y turnos');
    });

    it('preferences sidenav should show "Segunda Residencia" as second option', () => {
        expect(page.getPreferencesSideBarOptions().get(0).getText()).toContain('Garantías y turnos');
    });

    it('preferences sidenav first option click should show Preferences page', () => {
        page.clickSidenavFirstOption();
        expect(page.getCurrentURL()).toContain('/preferences');
    }); 

    it('preferences sidenav second option click should show Preferences page', () => {
        page.clickSidenavSecondOption();
        expect(page.getCurrentURL()).toContain('/second-residency');
    }); 
    
});

describe('Preferences page options', () => {
  let page: PreferencesPage;

  beforeEach(() => {
    page = new PreferencesPage();
    page.navigateTo();
  });

  it('preferences first dropdown should not be empty', () => {
    page.clickPreferencesFirstOption();
    expect(page.getDropdownOptions().count()).toBeGreaterThan(1);
  }); 

  it('preferences second dropdown should not be empty', () => {
    page.clickPreferencesSecondOption();
    expect(page.getDropdownOptions().count()).toBeGreaterThan(1);
  }); 

  it('Save button is disabled when first preference is not selected', () => {
    page.clickPreferencesFirstOption();
    page.clickDropdownFirstOption();
    expect(page.getClickButton().isEnabled()).toBe(false);
  });

  it('Save button is enabled when second preference is not selected', () => {
    page.clickPreferencesSecondOption();
    page.clickDropdownFirstOption();
    expect(page.getClickButton().isEnabled()).toBe(true);
  });

});