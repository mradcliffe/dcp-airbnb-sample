/* global describe it, beforeEach */

import * as _ from 'lodash';
import {
  contentFixture,
  getUserContentChained,
  getUserContentFanned,
} from './promise-pattern';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { assert } = chai;
chai.use(chaiAsPromised);

describe('promise-pattern', () => {
  let btoproNodes;

  beforeEach(() => {
    btoproNodes = _.find(contentFixture, node => node.uid === 6, {});
  });

  describe('getUserContentChained()', () => {
    it('should be fulfilled', () => {
      assert.isFulfilled(getUserContentChained('mradcliffe'));
    });

    it('should return 2 nodes for btopro', () => {
      assert.eventually.deepEqual(getUserContentChained('btopro'), btoproNodes);
    });

    it('should be rejected when passing invalid user name', () => {
      assert.isRejected(getUserContentChained('blah'));
    });

    it('should be rejected when there are no nodes', () => {
      assert.isRejected(getUserContentChained('admin'));
    });
  });

  describe('getUserContentFanned()', () => {
    it('should be fulfilled', () => {
      assert.isFulfilled(getUserContentFanned('mradcliffe'));
    });

    it('should return 2 nodes for btopro', () => {
      assert.eventually.deepEqual(getUserContentFanned('btopro'), btoproNodes);
    });

    it('should be rejected when passing invalid user name', () => {
      assert.isRejected(getUserContentFanned('blah'));
    });

    it('should be rejected when there are no nodes', () => {
      assert.isRejected(getUserContentChained('admin'));
    });
  });
});
