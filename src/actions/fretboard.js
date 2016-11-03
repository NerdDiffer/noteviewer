// https://github.com/danigb/tonal/blob/master/modules/fretboard/index.js
import { scale as fretboard } from 'tonal-fretboard';
import processFretboardNotes from '../utils/processFretboardNotes';
import { setErrorMessage } from './error';

import {
  FRETBOARD_NUMSTRINGS, FRETBOARD_FRETSPAN, FRETBOARD_POSITION, FRETBOARD_NOTES,
  ERROR_MESSAGE
} from './types';

export const changeNumStrings = numStrings => {
  return {
    type: FRETBOARD_NUMSTRINGS,
    payload: numStrings
  };
};

export const changeFretSpan = fretSpan => {
  if (fretSpan < 0 || fretSpan > 6) {
    return setErrorMessage('Fret span must be between 1 and 6');
  } else {
    return {
      type: FRETBOARD_FRETSPAN,
      payload: fretSpan
    };
  }
};

export const changePosition = position => {
  if (position < 0 || position > 15) {
    return setErrorMessage('Position must be between 1 and 15');
  } else {
    return {
      type: FRETBOARD_POSITION,
      payload: position
    };
  }
};

export const changeFretboardNotes = (scale, first, fretSpan) => {
  const last = first + fretSpan;
  let notes = fretboard('guitar', scale, first, last);
  const processedNotes = processFretboardNotes(notes);

  return {
    type: FRETBOARD_NOTES,
    payload: processedNotes
  };
};
