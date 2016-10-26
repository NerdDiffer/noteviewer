import {
  FRETBOARD_NUMSTRINGS,
  FRETBOARD_FRETSPAN,
  FRETBOARD_POSITION,
  FRETBOARD_NOTES
} from '../actions/types';
import defaultData from '../data';

const FretboardReducer = (state = defaultData.fretboard, action) => {
  switch (action.type) {
    case FRETBOARD_NUMSTRINGS:
      return {
        ...state,
        numStrings: action.payload
      };
    case FRETBOARD_FRETSPAN:
      return {
        ...state,
        fretSpan: action.payload
      };
    case FRETBOARD_POSITION:
      return {
        ...state,
        position: action.payload
      };
    case FRETBOARD_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return state;
  }
};

export default FretboardReducer;
