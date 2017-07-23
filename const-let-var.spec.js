/* global describe it */
/* eslint no-var:0 */

import { constLet } from './const-let-var';

const chai = require('chai');

const assert = chai.assert;

describe('const-let-var', () => {
  var options;

  it('should return false', () => {
    options = {};
    assert.isFalse(constLet(options));
  });

  it('should return "bar"', () => {
    options = { foo: 'bar' };
    assert.equal('foobar', constLet(options));
  });
});
