import test from 'ava'

import {
  FRETBOARD_FRETSPAN,
  FRETBOARD_POSITION,
  ERROR_MESSAGE
} from '../../../src/actions/types';
import errorReducer from '../../../src/reducers/error';

const resetDummyState = () => ({ message: null });

test('errorReducer provides some initial state by default', t => {
  const actual = errorReducer({}, {});
  t.truthy(actual);
});

test('errorReducer sets a message when receiving ERROR_MESSAGE type', t => {
  const dummyState = resetDummyState();
  const action = { type: ERROR_MESSAGE, payload: 'foo' };

  const actual = errorReducer(dummyState, action);
  const expected = { message: 'foo' };

  t.deepEqual(actual, expected);
});

test('errorReducer can reset message to null receiving ERROR_MESSAGE type', t => {
  const dummyState = resetDummyState();
  const action = { type: ERROR_MESSAGE, payload: null };

  const actual = errorReducer(dummyState, action);
  const expected = { message: null };

  t.deepEqual(actual, expected);
});

test('errorReducer resets error message when receiving FRETBOARD_FRETSPAN type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_FRETSPAN, payload: 'foobar' };

  const actual = errorReducer(dummyState, action);
  const expected = { message: null };

  t.deepEqual(actual, expected);
});

test('errorReducer resets error message when receiving FRETBOARD_POSITION type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_POSITION, payload: 'foobar' };

  const actual = errorReducer(dummyState, action);
  const expected = { message: null };

  t.deepEqual(actual, expected);
});
