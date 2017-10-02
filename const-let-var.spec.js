/* global describe it */
/* eslint no-var:0 */

import { letGood, constNoChange } from './const-let-var';

const chai = require('chai');

const assert = chai.assert;

describe('const-let-var', () => {
  describe('letGood()', () => {
    it('should return false', () => {
      assert.isFalse(letGood(false, false));
    });

    it('should return "foo"', () => {
      assert.equal(letGood(true, false), 'foo');
    });

    it('should return "foobar" when both parameters true', () => {
      assert.equal(letGood(true, true), 'foobar');
    });

    it('should return "a bar without foo is no bar at all"', () => {
      assert.equal(letGood(false, true), 'a bar without foo is no bar at all');
    });
  });

  describe('constNoChange()', () => {
    it('should return false', () => {
      assert.isFalse(constNoChange(false, true));
    });

    it('should return "foo"', () => {
      assert.equal(constNoChange(true, false), 'foo');
    });

    it('should return "foobar" when both parameters true', () => {
      assert.equal(constNoChange(true, true), 'foobar');
    });
  });
});
