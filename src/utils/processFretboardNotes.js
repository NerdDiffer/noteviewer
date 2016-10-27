export const sliceStr = (str, regex) => str.slice(0, str.search(regex));

export const sliceUnlessNull = note => note ? sliceStr(note, /\d/) : null;

const processNotesOnString = strArr => strArr.map(sliceUnlessNull);

export default function(notes) {
  notes.push([]);
  notes.reverse();

  // visit each subarray (represents collection of note data on instrument string)
  // for each subarray, consider each value (represents one note):
  //   - is value in the subarray truthy?
  //     - yes: remove a number at end of each note name
  //     - no:  return null
  return notes.map(processNotesOnString);
};
