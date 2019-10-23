import noteValidation from '../utils/noteValidation';
import { ValidationError } from '../utils/error/validationError';

/**
 * Interface of note in melody noteList
 */
interface MelodyNote {
  /**
   * Note name
   */
  note: string;

  /**
   * Frequency of note
   */
  frequency: number;

  /**
   * Length of note
   */
  length: number;
}

/**
 * Class represent object Melody
 * Object has field with array of notes
 */
export class Melody {
  /**
   * List of melody notes
   */
  public noteList: MelodyNote[];

  /**
   * Default note length in milliseconds
   */
  private defaultLength = 300;

  /**
   * Constructor for class Melody
   * @param {String} notes - string with melody notes
   */
  constructor(notes: string) {
    this.noteList = this.parseNoteList(notes);
  }

  /**
   * Setter for melody default length
   * @param {Number} defaultLength - default note length in milliseconds
   */
  public setDefaultLength(defaultLength: number): void {
    this.defaultLength = defaultLength;
  }

  /**
   * Parse string to noteList
   * @param {String} notes - string with melody notes
   * @return {MelodyNote[]}
   */
  private parseNoteList(notes: string): MelodyNote[] {
    const noteList: MelodyNote[] = [];

    notes.split(' ').map((note: string) => {
      let noteObject: MelodyNote;

      if (!noteValidation(note)) {
        throw new ValidationError(`Parse error note '${note}'`);
      }

      // Parse pause in melody (like '.' or '.x2')
      if (note.length === 1 && note === '.') {
        noteObject = {
          note: 'pause',
          frequency: 0.0,
          length: this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      } else if (note.length === 3 && note[0] === '.') {
        noteObject = {
          note: 'pause',
          frequency: 0.0,
          length: +note[2] * this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      }

      // Parse note like 'A4' or 'A4#'
      if (note.length === 2 || note.length === 3) {
        noteObject = {
          note,
          frequency: Melody.getFrequency(note),
          length: this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      }

      // Parse note like 'A4x2' or 'A4#x3'
      if (note.length === 4) {
        noteObject = {
          note: note.slice(0, 2),
          frequency: Melody.getFrequency(note),
          length: +note[3] * this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      } else if (note.length === 5) {
        noteObject = {
          note: note.slice(0, 3),
          frequency: Melody.getFrequency(note),
          length: +note[4] * this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      }
      return note;
    });
    return noteList;
  }

  /**
   * Get frequency of note
   * @param {String} note - new note (like A4)
   * @return {Number} frequency - frequency of note
   */
  private static getFrequency(note: string): number {
    let noteInOctave: number = 0;

    const octave: number = +note[1] + 1;

    switch (note[0]) {
      case 'C':
        noteInOctave = 1;
        break;
      case 'D':
        noteInOctave = 3;
        break;
      case 'E':
        noteInOctave = 5;
        break;
      case 'F':
        noteInOctave = 6;
        break;
      case 'G':
        noteInOctave = 8;
        break;
      case 'A':
        noteInOctave = 10;
        break;
      case 'B':
        noteInOctave = 12;
        break;
    }

    // Finds the frequency of note using the formula
    if (note[2] === '#') {
      return 440 * Math.pow(2, ((noteInOctave + (octave * 12) + 1) - 70) / 12);
    } else {
      return 440 * Math.pow(2, ((noteInOctave + (octave * 12)) - 70) / 12);
    }
  }
}
