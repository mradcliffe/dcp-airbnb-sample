/* global describe it */

import { btopro, uids, radcliffesFirst } from './arrow-functions';

const chai = require('chai');

const { assert } = chai;

describe('arrow-functions', () => {
  it('should be a btopro user', () => {
    assert.equal(btopro.name, 'btopro');
  });

  it('should contain a list of user ids only', () => {
    assert.deepEqual(uids, [1, 6, 30]);
  });

  it('should have sort mradcliffe above btopro', () => {
    assert.equal(radcliffesFirst[0].name, 'mradcliffe');
  });
});
