import { combineReducers } from 'redux';
import chord from './chord'
import fretboard from './fretboard'

const rootReducer = combineReducers({
  chord,
  fretboard
});

export default rootReducer;
