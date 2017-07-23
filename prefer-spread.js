/* eslint new-parens:1 */

function dateSpread(params) {
  return new Date(...params);
}

function dateArgument(params) {
  const dateParams = [null].concat(params);
  return new (Function.prototype.bind.apply(Date, dateParams));
}

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
