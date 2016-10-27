import test from 'ava';
import processFretboardNotes from '../../src/utils/processFretboardNotes';

test('produces these results', t => {
  const input = [
    ['E2', null, null, 'G2', null],
    [null, null, null, 'C3', null],
    [null, null, 'E3', null, null],
    ['G3', null, null, null, null],
    [null, 'C4', null, null, null],
    ['E4', null, null, 'G4', null]
  ];

  const expected = [
    [],
    ['E', null, null, 'G', null],
    [null, 'C', null, null, null],
    ['G', null, null, null, null],
    [null, null, 'E', null, null],
    [null, null, null, 'C', null],
    ['E', null, null, 'G', null]
  ];

  const actual = processFretboardNotes(input);
  t.deepEqual(actual, expected);
});
