// https://github.com/danigb/tonal/blob/master/modules/fretboard/index.js
import { scale as fretboard } from 'tonal-fretboard';
import processFretboardNotes from '../utils/processFretboardNotes';

import {
  FRETBOARD_NUMSTRINGS, FRETBOARD_FRETSPAN, FRETBOARD_POSITION, FRETBOARD_NOTES
} from './types';

export const changeNumStrings = numStrings => {
  return {
    type: FRETBOARD_NUMSTRINGS,
    payload: numStrings
  };
};

export const changeFretSpan = fretSpan => {
  return {
    type: FRETBOARD_FRETSPAN,
    payload: fretSpan
  };
};

export const changePosition = position => {
  return {
    type: FRETBOARD_POSITION,
    payload: position
  };
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
