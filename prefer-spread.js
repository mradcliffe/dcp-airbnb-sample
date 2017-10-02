/* eslint new-parens:1 */

// Old style.
function dateArgument(params) {
  const dateParams = [null].concat(params);
  return new (Function.prototype.bind.apply(Date, dateParams));
}

// params = ['2017', '09', '21'];
function dateSpread(params) {
  return new Date(...params);
}

// Copy an array argument so that we do not slip up and mutate it.
function copyWithFoo(arr = []) {
  const copy = [...arr];
  copy.push({ foo: 'bar' });
  return copy;
}

export {
  dateSpread,
  dateArgument,
  copyWithFoo,
};
