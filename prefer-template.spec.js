/* global describe it */

import { getTemplateUrl } from './prefer-template';

const chai = require('chai');

const assert = chai.assert;

describe('prefer-template', () => {
  it('should build URL with query parameters', () => {
    assert.equal(
      'http://example.com/article?q=blah',
      getTemplateUrl('http://example.com', 'article', [{ key: 'q', value: 'blah' }]));
  });

  it('should build URL without query parameters', () => {
    assert.equal(
      'http://example.com/article?',
      getTemplateUrl('http://example.com', 'article'));
  });
});
