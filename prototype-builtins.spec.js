/* global describe it */

import { fooIsBar, fooIsBarBuiltin } from './prototype-builtins';

const chai = require('chai');

const assert = chai.assert;

describe('prototype-builtin', () => {
  describe('fooIsBar()', () => {
    it('should return false when not defined', () => {
      assert.isFalse(fooIsBar());
    });

    it('should return false when object does not have property', () => {
      assert.isFalse(fooIsBar({}));
    });

    it('should return false when has property and is not bar', () => {
      assert.isFalse(fooIsBar({ foo: '' }));
    });

    it('should return true when has property and is bar', () => {
      assert.isTrue(fooIsBar({ foo: 'bar' }));
    });
  });

  describe('fooIsBarBuiltin()', () => {
    it('should return false when not defined', () => {
      assert.isFalse(fooIsBarBuiltin());
    });

    it('should return false when object does not have property', () => {
      assert.isFalse(fooIsBarBuiltin({}));
    });

    it('should return false when has property and is not bar', () => {
      assert.isFalse(fooIsBarBuiltin({ foo: '' }));
    });

    it('should return true when has property and is bar', () => {
      assert.isTrue(fooIsBarBuiltin({ foo: 'bar' }));
    });
  });
});
