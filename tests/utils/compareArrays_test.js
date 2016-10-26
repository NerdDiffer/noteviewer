import test from 'ava';
import compareArrays from '../../src/utils/compareArrays';

let arr1;
let arr2;

const reset = (arr, to) => (arr = to);

test.beforeEach(t => {
  arr1 = reset(arr1, [1, 2, 3]);
  arr2 = reset(arr2, [3, 2, 1]);
});

test.skip('creates a deep copy of each array', t => {
  compareArrays(arr1, arr2);

  console.log(arr1);
  console.log(arr2);
  arr1.push(4);
  arr2.push(0);

  t.deepEqual(arr1, [1, 2, 3]);
  t.deepEqual(arr2, [3, 2, 1]);
});

test('returns true if both arrays are considered equal', t => {
  const actual = compareArrays(arr1, arr2);
  t.true(actual);
});

test('returns false if both arrays are NOT considered equal', t => {
  const actual = compareArrays([1, 2, 3], [1, 2, 4]);
  t.false(actual);
});
