/* global describe it */
/* eslint no-unused-vars:1 */

import { Model, UserModel } from './class-methods-use-this';

const chai = require('chai');

const assert = chai.assert;

describe('class-methods-use-this', () => {
  describe('Model', () => {
    it('should instantiate without id', () => {
      const model = new Model();
      assert.deepEqual({ id: null }, model.getValues());
    });

    it('should instantiate with id', () => {
      const model = new Model({ id: 0 });
      assert.deepEqual({ id: 0 }, model.getValues());
    });
  });

  describe('UserModel', () => {
    it('should throw an error for missing required property', () => {
      try {
        const model = new UserModel({ id: 6 });
      } catch (error) {
        assert.equal('Missing required property name.', error.message);
      }
    });

    it('should set the default property for missing property', () => {
      const model = new UserModel({ name: 'btopro', mail: 'btopro@example.com' });
      assert.deepEqual({ id: null, picture: '', name: 'btopro', mail: 'btopro@example.com' }, model.getValues());
    });
  });
});
