
export function LogToFrequency(input) {
    if (!input) { return 0 };
    var stringArray = String(input).split(/(\s+)/);

    for (const item of stringArray) {
        if (item.startsWith('note:')) {
            let note = item.substring(5)
            // Define the frequency of A4 (A in the 4th octave), a common reference point.
            const A4_FREQUENCY = 440;

            // Define the MIDI note number for A4.
            const A4_MIDI_NUMBER = 69;

            // Regular expression to parse the note string (e.g., "C#4", "Bb3").
            const noteRegex = /^([a-g])([b#]?)(\d+)$/;
            const match = note.match(noteRegex);

            if (!match) {
                return 0;
            }

            const noteName = match[1];
            const accidental = match[2];
            const octave = parseInt(match[3]);

            // Base MIDI note number for each natural note in the 0th octave.
            const noteMap = {
                'c': 0, 'c#': 1, 'db': 1, 'd': 2, 'd#': 3, 'eb': 3, 'e': 4, 'f': 5,
                'f#': 6, 'gb': 6, 'g': 7, 'g#': 8, 'ab': 8, 'a': 9, 'a#': 10, 'bb': 10, 'b': 11
            };

            let midiNoteNumber = noteMap[noteName];

            // Adjust for accidentals.
            if (accidental === '#') {
                midiNoteNumber += 1;
            }

            // Calculate the final MIDI note number based on the octave.
            // The MIDI standard assigns C0 as MIDI note 12.
            midiNoteNumber += (octave + 1) * 12;

            // Calculate frequency using the formula: f = A4_FREQUENCY * 2^((midiNoteNumber - A4_MIDI_NUMBER) / 12)
            const frequency = A4_FREQUENCY * Math.pow(2, (midiNoteNumber - A4_MIDI_NUMBER) / 12);
            return Number(frequency); 
        }
    }
    

}

export default LogToFrequency;