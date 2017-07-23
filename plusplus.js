/* eslint no-plusplus:1 */

const initialValue = 0;
const exampleIterator = [1, 1, 1, 1, 1];
let mutatedValue = initialValue;

for (let i = 0; i < 5; i++) {
  mutatedValue++;
}

const plusPlusValue = mutatedValue;
const noPlusPlusValue = exampleIterator.reduce(value => (value + 1));

export {
  initialValue,
  plusPlusValue,
  noPlusPlusValue,
};
