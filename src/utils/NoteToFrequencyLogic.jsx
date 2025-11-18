export function NoteToFrequency(note) {
    

    // Define the frequency of A4 (A in the 4th octave), a common reference point.
    const A4_FREQUENCY = 440;

    // Define the MIDI note number for A4.
    const A4_MIDI_NUMBER = 69;

    // Regular expression to parse the note string (e.g., "C#4", "Bb3").
    const noteRegex = /^([a-g])([b#]?)(\d+)$/;
    const match = note.match(noteRegex);

    if (!match) {
        throw new Error("Invalid note format. Expected format like 'C4' or 'A#3'.");
    }

    const noteName = match[1];
    const accidental = match[2];
    const octave = parseInt(match[3]);

    // Base MIDI note number for each natural note in the 0th octave.
    const noteMap = {
        'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
        'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11
    };

    let midiNoteNumber = noteMap[noteName];

    // Adjust for accidentals.
    if (accidental === '#') {
        midiNoteNumber += 1;
    } else if (accidental === 'b') {
        midiNoteNumber -= 1;
    }

    // Calculate the final MIDI note number based on the octave.
    // The MIDI standard assigns C0 as MIDI note 12.
    midiNoteNumber += (octave + 1) * 12;

    // Calculate frequency using the formula: f = A4_FREQUENCY * 2^((midiNoteNumber - A4_MIDI_NUMBER) / 12)
    const frequency = A4_FREQUENCY * Math.pow(2, (midiNoteNumber - A4_MIDI_NUMBER) / 12);

    return frequency;
    
  
}
export function LogToNote(input) {
    if (!input) { return 0 };
    var stringArray = String(input).split(/(\s+)/);

    for (const item of stringArray) {
        if (item.startsWith('note:')) {
            let note = item.substring(5)
            return note;
        }
    }
    return 0;
}

export default NoteToFrequency;