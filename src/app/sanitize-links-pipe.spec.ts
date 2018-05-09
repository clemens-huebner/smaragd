import { SanitizeLinksPipePipe } from './sanitize-links.pipe';

describe('SanitizeLinksPipePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeLinksPipePipe();
    expect(pipe).toBeTruthy();
  });
});
