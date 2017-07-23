/* eslint no-var:1 */
function constLet(options) {
  const opts = Object.freeze(options);

  if (undefined !== opts.foo) {
    let ret = 'foo';
    ret += opts.foo;
    return ret;
  }

  return false;
}

function varBad(options) {
  var bad = false;

  if (undefined !== options.foo) {
    bad = 'foo';
  }

  return bad;
}

export { constLet, varBad };
