import { Angular.Blogs.UiPage } from './app.po';

describe('angular.blogs.ui App', () => {
  let page: Angular.Blogs.UiPage;

  beforeEach(() => {
    page = new Angular.Blogs.UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
