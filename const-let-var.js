/* eslint no-var:1 */

const varLetConst = function varLetConst(foo, bar) {
  let ret = '';
  var hoisted = 'whyyyyy';  

  if (foo) {
    const foonobar = 'foo';

    if (bar) {
      ret = 'foobar';
    } else {
      ret = foonobar;
    }
  } else if (bar) {
    ret = 'one does not bar without foo';
  } else {
    ret = hoisted;
  }

  return ret;
};

export default varLetConst;
