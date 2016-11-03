import test from 'ava'

import {
  FRETBOARD_NUMSTRINGS,
  FRETBOARD_FRETSPAN,
  FRETBOARD_POSITION,
  FRETBOARD_NOTES,
  ERROR_MESSAGE
} from '../../../src/actions/types';
import fretboardReducer from '../../../src/reducers/fretboard';

const resetDummyState = () => {
  return {
    numStrings: 6,
    fretSpan: 4,
    position: 0,
    notes: []
  };
};

test('fretboardReducer provides some initial state by default', t => {
  const actual = fretboardReducer({}, {});
  t.truthy(actual);
});

test('fretboardReducer responds to FRETBOARD_NUMSTRINGS action type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_NUMSTRINGS, payload: 4 };

  const actual = fretboardReducer(dummyState, action);
  const expected = {
    numStrings: 4,
    fretSpan: 4,
    position: 0,
    notes: []
  };

  t.deepEqual(actual, expected);
});

test('fretboardReducer responds to FRETBOARD_FRETSPAN action type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_FRETSPAN, payload: 8 };

  const actual = fretboardReducer(dummyState, action);
  const expected = {
    numStrings: 6,
    fretSpan: 8,
    position: 0,
    notes: []
  };

  t.deepEqual(actual, expected);
});

test('fretboardReducer responds to FRETBOARD_POSITION action type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_POSITION, payload: 6 };

  const actual = fretboardReducer(dummyState, action);
  const expected = {
    numStrings: 6,
    fretSpan: 4,
    position: 6,
    notes: []
  };

  t.deepEqual(actual, expected);
});

test('fretboardReducer responds to FRETBOARD_NOTES action type', t => {
  const dummyState = resetDummyState();
  const action = { type: FRETBOARD_NOTES, payload: [[], [null, 'F']] };

  const actual = fretboardReducer(dummyState, action);
  const expected = {
    numStrings: 6,
    fretSpan: 4,
    position: 0,
    notes: [[], [null, 'F']]
  };

  t.deepEqual(actual, expected);
});

test('fretboardReducer does not respond to ERROR_MESSAGE action type', t => {
  const dummyState = resetDummyState();
  const action = { type: ERROR_MESSAGE, payload: 'test message' };

  const actual = fretboardReducer(dummyState, action);
  const expected = resetDummyState();

  t.deepEqual(actual, expected);
});
