import test from 'ava'

import { CHORD_TONIC, CHORD_TYPE, CHORD_NOTES } from '../../../src/actions/types';
import chordReducer from '../../../src/reducers/chord';

test('chordReducer provides some initial state by default', t => {
  const actual = chordReducer({}, {});
  t.truthy(actual);
});

test('chordReducer responds to CHORD_TONIC action type', t => {
  const dummyState = {
    type: 'major',
    tonic: 'C'
  };
  const action = { type: CHORD_TONIC, payload: 'A' };

  const actual = chordReducer(dummyState, action);
  const expected = {
    type: 'major',
    tonic: 'A'
  };

  t.deepEqual(actual, expected);
});

test('chordReducer responds to CHORD_TYPE action type', t => {
  const dummyState = {
    type: 'major',
    tonic: 'C'
  };
  const action = { type: CHORD_TYPE, payload: 'minor' };

  const actual = chordReducer(dummyState, action);
  const expected = {
    type: 'minor',
    tonic: 'C'
  };

  t.deepEqual(actual, expected);
});

test('chordReducer responds to CHORD_NOTES action type', t => {
  const dummyState = {
    notes: ['C', 'E', 'G']
  };
  const action = { type: CHORD_NOTES, payload: ['A', 'C#', 'E'] };

  const actual = chordReducer(dummyState, action);
  const expected = {
    notes: ['A', 'C#', 'E']
  };

  t.deepEqual(actual, expected);
});
