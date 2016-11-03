import test from 'ava'

import * as TYPES from '../../../src/actions/types';
import * as actions from '../../../src/actions/fretboard';

test('changeFretSpan dispatches ERROR_MESSAGE type when fretSpan is too low', t => {
  const action = actions.changeFretSpan(-1);
  const actual = action.type;
  t.is(action.type, TYPES.ERROR_MESSAGE);
  t.truthy(action.payload);
});

test('changeFretSpan dispatches ERROR_MESSAGE type when fretSpan is too high', t => {
  const action = actions.changeFretSpan(7);
  const actual = action.type;
  t.is(action.type, TYPES.ERROR_MESSAGE);
  t.truthy(action.payload);
});

test('changePosition dispatches ERROR_MESSAGE type when position is too low', t => {
  const action = actions.changePosition(-1);
  const actual = action.type;
  t.is(action.type, TYPES.ERROR_MESSAGE);
  t.truthy(action.payload);
});

test('changePosition dispatches ERROR_MESSAGE type when position is too high', t => {
  const action = actions.changePosition(16);
  const actual = action.type;
  t.is(action.type, TYPES.ERROR_MESSAGE);
  t.truthy(action.payload);
});
