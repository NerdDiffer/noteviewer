import isEqual from 'lodash.isequal';
import cloneDeep from 'lodash.clonedeep';

export const cloneAndSort = arr => cloneDeep(arr).sort();

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; }

  const copy1 = cloneAndSort(arr1);
  const copy2 = cloneAndSort(arr2);

  return isEqual(copy1, copy2);
};

export default areArraysEqual;
