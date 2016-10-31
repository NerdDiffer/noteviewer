import test from 'ava';
import areArraysEqual, { cloneAndSort } from '../../src/utils/areArraysEqual';

let arr1;
let arr2;

const reset = (arr, to) => (arr = to);

test.beforeEach(t => {
  arr1 = reset(arr1, [2, 3, 1]);
  arr2 = reset(arr2, [3, 2, 1]);
});

test('#cloneAndSort, creates a deep copy of and sorts an array', t => {
  const copy = cloneAndSort(arr1);

  copy.push(4);

  t.deepEqual(arr1, [2, 3, 1]);
  t.deepEqual(copy, [1, 2, 3, 4]);
});

test('returns true if both arrays are considered equal', t => {
  const actual = areArraysEqual(arr1, arr2);
  t.true(actual);
});

test('returns false if both arrays are NOT considered equal', t => {
  const actual = areArraysEqual([1, 2, 3], [1, 2, 4]);
  t.false(actual);
});
