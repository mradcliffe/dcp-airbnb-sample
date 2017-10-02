/* global describe it */
/* eslint no-underscore-dangle:1 */

import UnderscoreDangle from './underscore-dangle';

const chai = require('chai');

const assert = chai.assert;

describe('underscore-dangle', () => {
  it('should have fooHasBar set to true when passing foobar', () => {
    const thing = new UnderscoreDangle({ foo: 'bar' });
    assert.isTrue(thing.fooHasBar);
  });

  it('should have fooHasBar set to false by default', () => {
    const thing = new UnderscoreDangle({});
    assert.isFalse(thing.fooHasBar);
  });

  it('should have fooHasBar set to true when calling internal method', () => {
    const thing = new UnderscoreDangle({});
    thing._addInternalStuff('bar');
    assert.isTrue(thing.fooHasBar);
  });

  it('should be bar time using hidden function', () => {
    const thing = new UnderscoreDangle({ foo: 'bar' });
    assert.equal(thing.getBarRules2(), 'Bar time');
  });

  it('should have fooHasBar2 set to false by default', () => {
    const thing = new UnderscoreDangle({});
    assert.equal(thing.getBarRules2(), 'No bar for you');
  });
});
