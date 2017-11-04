import { AngularProjectsPage } from './app.po';

describe('angular-projects App', () => {
  let page: AngularProjectsPage;

  beforeEach(() => {
    page = new AngularProjectsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to prj!');
  });
});
