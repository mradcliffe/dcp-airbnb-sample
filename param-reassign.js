/* eslint no-param-reassign:1, no-unused-vars:1 */

function paramMutate(param) {
  param.foo = 'bar';
  return true;
}

function noParamMutate(param) {
  const value = Object.assign({}, param);
  value.foo = 'bar';
  return value;
}

function paramReassign(param) {
  param = param || { foo: 'bar' };
  return param.foo === 'bar';
}

function noParamReassign(param) {
  const value = Object.assign({ foo: 'bar' }, param);
  return value.foo === 'bar';
}

export {
  paramReassign,
  noParamReassign,
  paramMutate,
  noParamMutate,
 };
