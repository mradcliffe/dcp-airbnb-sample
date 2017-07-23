/* global describe it */

import { btopro, uids, radcliffesBeforeOllendykes } from './arrow-functions';

const chai = require('chai');

const assert = chai.assert;

describe('arrow-functions', () => {
  it('should be a btopro user', () => {
    assert.equal('btopro', btopro.name);
  });

  it('should contain a list of user ids only', () => {
    assert.deepEqual([1, 6, 30], uids);
  });

  it('should have sort mradcliffe above btopro', () => {
    assert.equal('mradcliffe', radcliffesBeforeOllendykes[1].name);
  });
});
