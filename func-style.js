/* eslint func-style:1 no-use-before-define:1 */

// anonFunction is an anonymous function expression that is harder to debug.
const anonFunction = bar => `foo${bar}`;

// hoistedFunction declaration is hoisted above its call, which is confusing.
hoistedFunction('bar');

function hoistedFunction(bar) {
  return `foo${bar}`;
}

const nonHoistedFunction = function namedFunction(bar) {
  return `foo${bar}`;
};

const fooBarObject = {
  foobar: function namedFunction(bar) {
    return `foo${bar}`;
  },
};

export {
  anonFunction,
  hoistedFunction,
  nonHoistedFunction,
  fooBarObject,
};
