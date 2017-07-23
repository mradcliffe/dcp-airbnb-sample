/* global describe it */

import { plusPlusValue, noPlusPlusValue } from './plusplus';

const chai = require('chai');

const assert = chai.assert;

describe('plusplus', () => {
  it('should equal 5 when using plusplus', () => {
    assert.equal(5, plusPlusValue);
  });

  it('should equal 5 when using no-plusplus', () => {
    assert.equal(5, noPlusPlusValue);
  });
});
