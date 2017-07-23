/* global describe it */
import foo from './prefer-rest-params';

const chai = require('chai');

const assert = chai.assert;

describe('prefer-rest-params', () => {
  it('should instantiate foo with only bar', () => {
    assert.deepEqual({ foo: 'bar' }, foo('bar'));
  });

  it('should instantiate foo with bar and blah', () => {
    const args = ['bar', 'blah'];
    assert.deepEqual({ foo: 'bar', blah: 'blah' }, foo(...args));
  });

  it('should instantiate foo with bar, blah and halb', () => {
    const args = ['bar', 'blah', 'halb'];
    assert.deepEqual({ foo: 'bar', blah: 'blah', halb: 'halb' }, foo(...args));
  });
});
