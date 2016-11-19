import { StringConsumerPage } from './app.po';

describe('string-consumer App', function() {
  let page: StringConsumerPage;

  beforeEach(() => {
    page = new StringConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
