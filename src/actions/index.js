// https://github.com/danigb/tonal/blob/master/modules/chord/index.js
import { build as chord } from 'tonal-chord';

import { CHORD_TONIC, CHORD_TYPE, CHORD_NOTES } from './types';

export const changeChordTonic = chordTonic => {
  return {
    type: CHORD_TONIC,
    payload: chordTonic
  };
};

export const changeChordType = chordType => {
  return {
    type: CHORD_TYPE,
    payload: chordType
  };
};

export const getNotes = (chordType, chordTonic) => {
  return {
    type: CHORD_NOTES,
    payload: chord(chordType, chordTonic)
  };
};
