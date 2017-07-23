/* global describe it beforeEach */

import FakeComponent from './destructuring';

const chai = require('chai');

const assert = chai.assert;

describe('destructuring', () => {
  let component;

  beforeEach(() => {
    component = new FakeComponent({
      uid: 6,
      name: 'btopro',
      mail: 'btopro@example.com',
      picture: '/sites/default/files/styles/thumbnail/public/pictures/picture-6-1432257363.jpg',
    });
  });

  it('should return mailto link', () => {
    assert.equal('<a href="mailto:btopro@example.com">btopro</a>', component.formatUsername());
  });

  it('should return figure HTML', () => {
    const src = '/sites/default/files/styles/thumbnail/public/pictures/picture-6-1432257363.jpg';
    assert.equal(`<figure><img src="${src}" /><figcaption>btopro's avatar</figcaption></figure>`, component.formatPicture());
  });

  it('should return destructured object for getProperties()', () => {
    const { mail } = component.getProperties();
    assert.equal('btopro@example.com', mail);
  });
});
