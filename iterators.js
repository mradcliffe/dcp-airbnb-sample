/* eslint no-iterator:1, guard-for-in:1, no-unused-var:1, no-restricted-syntax:1, prefer-const:1 */

import * as _ from 'lodash';

const objFixture = {
  1: { uid: 1, name: 'admin', mail: 'admin@example.com' },
  6: { uid: 6, name: 'btopro', mail: 'btopro@example.com' },
  30: { uid: 30, name: 'mradcliffe', mail: 'mradcliffe@softpixel.com' },
};
const forInValue = [];

for (let n in objFixture) {
  forInValue.push(objFixture[n]);
}

const lodashValue = _.flatMap(objFixture, item => item, []);

export {
  forInValue,
  lodashValue,
};
