/* eslint no-var:1 */
function varBad(foo, bar) {
  var bad = false;

  if (foo) {
    bad = 'foo';

    if (bar) {
      bad = 'foobar';
    }
  }

  return bad;
}

function letGood(foo, bar) {
  if (foo) {
    let ret = 'foo';
    if (bar) {
      ret = 'foobar';
    }
    return ret;
  } else if (bar) {
    const ret = 'a bar without foo is no bar at all';
    return ret;
  }

  return false;
}

function constNoChange(foo, bar) {
  const foonobar = 'foo';
  const foobar = 'foobar';

  if (foo) {
    if (bar) {
      return foobar;
    }
    return foonobar;
  }
  return false;
}

export { letGood, varBad, constNoChange };
