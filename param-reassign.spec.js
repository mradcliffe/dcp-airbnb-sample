/* global describe it */

import { paramReassign, noParamReassign, paramMutate, noParamMutate } from './param-reassign';

const chai = require('chai');

const assert = chai.assert;

describe('param-reassign', () => {
  describe('paramMutate()', () => {
    it('should mutate object passed in by reference value', () => {
      const blah = {};
      paramMutate(blah);
      assert.deepEqual({ foo: 'bar' }, blah);
    });
  });

  describe('noParamMutate()', () => {
    it('should return a copy of the parameter instead of mutating it', () => {
      let blah = {};
      blah = noParamMutate(blah);
      assert.deepEqual({ foo: 'bar' }, blah);
    });
  });

  describe('paramReassign()', () => {
    it('should return true when foo is bar when parameter undefined', () => {
      assert.isTrue(paramReassign());
    });

    it('should return false when foo is explicitly not bar', () => {
      assert.isFalse(paramReassign({ foo: '' }));
    });
  });

  describe('noParamReassign()', () => {
    it('should return true when foo is bar when parameter undefined', () => {
      assert.isTrue(noParamReassign());
    });

    it('should return false when foo is explicitly not bar', () => {
      assert.isFalse(noParamReassign({ foo: '' }));
    });
  });
});
