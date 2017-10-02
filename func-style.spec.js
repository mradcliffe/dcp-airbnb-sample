/* global describe, it */

import {
  anonFunction,
  hoistedFunction,
  nonHoistedFunction,
  fooBarObject,
} from './func-style';

const chai = require('chai');

const assert = chai.assert;

describe('func-style', () => {
  describe('anonFunction()', () => {
    it('should return foobar', () => {
      assert.equal(anonFunction('bar'), 'foobar');
    });
  });

  describe('hoistedFunction()', () => {
    it('should return foobar', () => {
      assert.equal(hoistedFunction('bar'), 'foobar');
    });
  });

  describe('nonHoistedFunction()', () => {
    it('should return foobar', () => {
      assert.equal(nonHoistedFunction('bar'), 'foobar');
    });
  });

  describe('fooBarObject', () => {
    it('should return foobar when calling fooBarObject.foobar(bar)', () => {
      assert.equal(fooBarObject.foobar('bar'), 'foobar');
    });
  });
});
