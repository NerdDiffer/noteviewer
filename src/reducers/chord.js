// Represents the current chord on display
import { CHORD_TONIC, CHORD_TYPE, CHORD_NOTES } from '../actions/types';
import defaultData from '../data';

// tonic: the root note. ie: 'C2'
// type: the chord quality. ie: 'maj7', '7', 'm'
// notes: names of notes in the chord. ie: `['C', 'E', 'G', 'Bb']`
//   these are determined by the 'tonal' library

const ChordReducer = (state = defaultData.chord, action) => {
  switch (action.type) {
    case CHORD_TONIC:
      return {
        ...state,
        tonic: action.payload
      };
    case CHORD_TYPE:
      return {
        ...state,
        type: action.payload
      };
    case CHORD_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return state;
  }
};

export default ChordReducer;
