/* global describe it */

import { getTemplateUrl } from './prefer-template';

const chai = require('chai');

const assert = chai.assert;

describe('prefer-template', () => {
  it('should build URL with query parameters', () => {
    assert.equal(
      getTemplateUrl('http://example.com', 'article', [{ key: 'q', value: 'blah' }]),
      'http://example.com/article?q=blah');
  });

  it('should build URL without query parameters', () => {
    assert.equal(
      getTemplateUrl('http://example.com', 'article'),
      'http://example.com/article?');
  });
});
