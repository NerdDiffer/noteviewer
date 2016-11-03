import test from 'ava'

import { ERROR_MESSAGE } from '../../../src/actions/types';
import { setErrorMessage } from '../../../src/actions/error';

test('setErrorMessage has null payload by default', t => {
  const action = setErrorMessage();
  const actual = action.type;
  t.is(action.type, ERROR_MESSAGE);
  t.deepEqual(action.payload, null);
});

test('setErrorMessage can have a message in payload', t => {
  const action = setErrorMessage('Message to Harry Manback');
  const actual = action.type;
  t.is(action.type, ERROR_MESSAGE);
  t.truthy(action.payload);
});
