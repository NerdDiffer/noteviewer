// Default data
import { changeFretboardNotes as initFretboardNotes } from './actions/fretboard';

const chord = {
  tonic: 'C',
  type: 'M',
  notes: ['C', 'E', 'G']
};

const fretboard = {
  numStrings: 6,
  fretSpan: 4,
  position: 0
};

fretboard.notes = initFretboardNotes(
  chord.notes,
  fretboard.position,
  fretboard.fretSpan
).payload;

export default { chord, fretboard };
