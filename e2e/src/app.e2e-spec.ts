import { AppPage } from './app.po';

describe('lab-app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should locate the nav bar', () => {
    page.navigateTo();
    expect(page.getNavBar()).toBeDefined();
  });
});