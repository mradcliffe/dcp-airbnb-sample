/* eslint no-prototype-builtins:1 */

function fooIsBarBuiltin(obj) {
  if (undefined === obj) {
    return false;
  }
  return obj.hasOwnProperty('foo') && obj.foo === 'bar';
}

function fooIsBar(obj = {}) {
  return Object.prototype.hasOwnProperty.call(obj, 'foo') && obj.foo === 'bar';
}

export { fooIsBarBuiltin, fooIsBar };
