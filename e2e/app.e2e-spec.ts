import { GccPage } from './app.po';

describe('gcc App', () => {
  let page: GccPage;

  beforeEach(() => {
    page = new GccPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
