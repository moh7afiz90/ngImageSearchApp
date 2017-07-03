import { ImageSearchAppPage } from './app.po';

describe('image-search-app App', () => {
  let page: ImageSearchAppPage;

  beforeEach(() => {
    page = new ImageSearchAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
