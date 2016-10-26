import isEqual from 'lodash.isequal';
import cloneDeep from 'lodash.clonedeep';

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; }

  const copy1 = cloneDeep(arr1).sort();
  const copy2 = cloneDeep(arr2).sort();

  return isEqual(copy1, copy2);
};

export default areArraysEqual;
