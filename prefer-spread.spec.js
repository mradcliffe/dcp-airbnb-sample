/* global describe it */

import { dateSpread, dateArgument, copyWithFoo } from './prefer-spread';

const chai = require('chai');

const assert = chai.assert;

describe('prefer-spread', () => {
  it('should create a date object from year only', () => {
    const dateParams = ['2017'];
    assert.deepEqual(dateArgument(dateParams), dateSpread(dateParams));
  });

  it('should create a date object from year and month', () => {
    const dateParams = ['2017', '09'];
    assert.deepEqual(dateArgument(dateParams), dateSpread(dateParams));
  });

  it('should create a date object from year, month, day, hour, minute', () => {
    const dateParams = ['1999', '12', '31', '11', '59', '59'];
    assert.deepEqual(dateArgument(dateParams), dateSpread(dateParams));
  });

  it('should copy an empty array and add foobar into it', () => {
    assert.deepEqual(copyWithFoo([]), [{ foo: 'bar' }]);
  });

  it('should copy an array and add foobar into it', () => {
    assert.deepEqual(copyWithFoo([15, 10, 5]), [15, 10, 5, { foo: 'bar' }]);
  });
});
