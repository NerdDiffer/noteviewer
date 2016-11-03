import {
  ERROR_MESSAGE,
  FRETBOARD_FRETSPAN,
  FRETBOARD_POSITION
} from '../actions/types';
import defaultData from '../data';

const ErrorReducer = (state = defaultData.error, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case FRETBOARD_FRETSPAN:
    case FRETBOARD_POSITION:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
};

export default ErrorReducer;
