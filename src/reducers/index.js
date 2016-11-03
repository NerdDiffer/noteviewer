import { combineReducers } from 'redux';
import chord from './chord'
import fretboard from './fretboard'
import error from './error'

const rootReducer = combineReducers({
  chord,
  fretboard,
  error
});

export default rootReducer;
