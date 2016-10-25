import chord from 'tonal-chord';

import { CHORD_TONIC, CHORD_TYPE, CHORD_NOTES } from './types';

export const changeChordTonic = chordTonic => {
  return {
    type: CHORD_TONIC,
    payload: chordTonic
  };
};

export const changeChordType = (chordType) => {
  return {
    type: CHORD_TYPE,
    payload: chordType
  };
};

export const getNotes = (type, tonic) => {
  return {
    type: CHORD_NOTES,
    payload: chord(type, tonic)
  };
};
