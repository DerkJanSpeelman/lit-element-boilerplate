import { html, fixture, expect } from '@open-wc/testing';

import { TestTest } from '../src/TestTest.js';

describe('test1', () => {
  let element: TestTest = new TestTest();
  beforeEach(async () => {
    element = await fixture(html`<test-test class="test"></test-test>`);
  });

  it('renders a h1', (done: Mocha.Done) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res: unknown = element.updateComplete;
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
    done();
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
