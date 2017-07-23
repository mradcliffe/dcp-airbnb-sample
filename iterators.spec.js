/* global describe it */

import { forInValue, lodashValue } from './iterators';

const chai = require('chai');

const assert = chai.assert;

describe('iterators', () => {
  it('should do th same thing with lodash as in for-in', () => {
    assert.deepEqual(forInValue, lodashValue);
  });
});
