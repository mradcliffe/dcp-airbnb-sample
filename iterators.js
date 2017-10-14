/* eslint no-iterator:1, guard-for-in:1, no-unused-var:1, no-restricted-syntax:1, prefer-const:1 */

import * as _ from 'lodash';

const objFixture = {
  admin: { id: 1, name: 'admin' },
  btopro: { id: 6, name: 'btopro' },
  mradcliffe: { id: 30, name: 'mradcliffe' },
};
const forInValue = [];

// Bad.
for (let n in objFixture) {
  forInValue.push(objFixture[n]);
}

// Good.
const lodashValue = _.flatMap(objFixture, item => item, []);

export {
  forInValue,
  lodashValue,
};
