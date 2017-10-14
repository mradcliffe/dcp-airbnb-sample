/* global describe it */
/* eslint no-var:0 */

import varLetConst from './const-let-var';

const chai = require('chai');

const { assert } = chai;

describe('const-let-var', () => {
  describe('varLetConst()', () => {
    it('should return "foo" when foo is true', () => {
      assert.equal(varLetConst(true, false), 'foo');
    });

    it('should return "foobar" when both parameters are true', () => {
      assert.equal(varLetConst(true, true), 'foobar');
    });

    it('should return "whyyyyy" when both parameters are false', () => {
      assert.equal(varLetConst(false, false), 'whyyyyy');
    });

    it('should return "one does not bar without foo" when bar is true only', () => {
      assert.equal(varLetConst(false, true), 'one does not bar without foo');
    });
  });
});
