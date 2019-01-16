import { AppPage} from './home.po';

describe('Home page navbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should locate the nav bar', () => {
    expect(page.getNavBar()).toBeDefined();
  });

  it('should show home message text', () => {
    expect(page.getHomeTitle().getText()).toBe('Messages');
  });

  it('should render the nav bar logo', () => {
    expect(page.getNavBarLogo().isPresent()).toBe(true);
  });

  it('should render the nav bar user icon', () => {
    expect(page.getNavBarUserIcon().isPresent()).toBe(true);
  });

});

describe('Home page navbar usermenu', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should not show user menu if user icon is not clicked', () => {
    expect(page.getUserIconMenu().isPresent()).toBe(false);
  });

  it('should open preferences menu after user icon click', () => {
    page.clickUserIcon();
    expect(page.getUserIconMenu().isPresent()).toBe(true);
  });

  it('should show Preferencias option under user icon menu', () => {
    page.clickUserIcon();
    expect(page.getUserIconMenuOption().getText()).toBe('Preferencias');
  });

  it('should redirect to preferences page on user icon menu preferences option click', () => {
    page.clickUserIcon();
    page.clickUserIconMenuOption();
    expect(page.getCurrentURL()).toContain("/preferences");
  });
  
});

describe('Home page content', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('click Dialog should be close by default ', () => {
    expect(page.getDialog().isPresent()).toBe(false);
  });

  it('click Dialog should open Dialog modal ', () => {
    page.openDialog();
    expect(page.getDialog().isPresent()).toBe(true);
  });

  it('dialog modal should be well formed', () => {
    page.openDialog();
    expect(page.getDialogTitle().getText()).toBe('This is a Dialog title'); 
    expect(page.getDialogContent().getText()).toBe('This is the content of the dialog'); 
    expect(page.getDialogCloseButton().getText()).toBe('Close'); 
  });


  it('click close Dialog should close Dialog modal ', () => {
    page.openDialog();
    page.clickDialogCloseButton();
    expect(page.getDialog().isPresent()).toBe(false);
  });

  it('home should contain messages table', () => {
    expect(page.getMessagesTable().isPresent()).toBe(true);
  });

  it('messages table should have 5 columns', () => {
    expect(page.getMessagesTableColumns().count()).toBe(5);
  });

  it('messages table should have correct columns names', () => {
    var columns = page.getMessagesTableColumns();
    expect(columns.get(0).getText()).toBe('Crew');
    expect(columns.get(1).getText()).toBe('Teléfono');
    expect(columns.get(2).getText()).toBe('Base');
    expect(columns.get(3).getText()).toBe('Fecha de envío');
    expect(columns.get(4).getText()).toBe('Acciones');
  });

  it('messages table should have content', () => {
    expect(page.getMessagesTableRows().count()).toBeGreaterThan(1);
  });
 
  it('home should have input example', function() {
    expect(page.getHomeInput().isPresent()).toBe(true);
  });

  it('home input should allow to type a string', function() {
     
    var input = page.getHomeInput()
    input.sendKeys('Llenando Input');
    expect(input.getAttribute('value')).toBe('Llenando Input');
  });

});

