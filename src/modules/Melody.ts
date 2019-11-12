import noteValidation from '../utils/noteValidation';
import { ValidationError } from '../errors/validationError';

/**
 * Interface of note in melody noteList
 */
export interface MelodyNote {
  /**
   * Note name (e.g. 'A4', 'C3#')
   */
  note: string;

  /**
   * Frequency of note in hertz
   */
  frequency: number;

  /**
   * Length of note in milliseconds
   */
  length: number;
}

/**
 * Name of notes and their indexes in octave
 */
enum NoteNames {
  C = 1,
  D = 3,
  E = 5,
  F = 6,
  G = 8,
  A = 10,
  B = 12
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
   * Field with all notes in string
   */
  private readonly notes: string;

  /**
   * Constructor for class Melody
   * @param {String} notes - string with melody notes
   */
  constructor(notes: string) {
    this.notes = notes;
    this.noteList = this.parseNoteList(notes);
  }

  /**
   * Setter for melody default length
   * @param {Number} defaultLength - default note length in milliseconds
   */
  public setDefaultLength(defaultLength: number): void {
    this.defaultLength = defaultLength;
    this.noteList = this.parseNoteList(this.notes);
  }

  /**
   * Parse string to noteList
   * @param {String} notes - string with melody notes
   * @return {MelodyNote[]}
   */
  private parseNoteList(notes: string): MelodyNote[] {
    const noteList: MelodyNote[] = [];

    notes.toUpperCase().split(' ').map((note: string) => {
      let noteObject: MelodyNote;

      if (!noteValidation(note)) {
        throw new ValidationError(`Parse error note '${note}'`);
      }

      const [noteCode, length] = note.split('x');

      /**
       * Parse pause in melody (like '.' or '.x2')
       */
      if (noteCode === '.') {
        noteObject = {
          note: 'pause',
          frequency: 0.0,
          length: (+length || 1) * this.defaultLength
        };
        noteList.push(noteObject);
        return note;
      }

      /**
       * Parse note like 'A4', 'A4x2', 'A4#' or 'A4#x6'
       */
      noteObject = {
        note: noteCode,
        frequency: Melody.getFrequency(noteCode),
        length: (+length || 1) * this.defaultLength
      };
      noteList.push(noteObject);
      return note;
    });
    return noteList;
  }

  /**
   * Get frequency of note in hertz using the formula
   * @param {String} note - new note (like A4)
   * @return {Number} frequency - frequency of note in hertz
   */
  private static getFrequency(note: string): number {
    const noteInOctave: number = NoteNames[note[0] as keyof typeof NoteNames];

    const octave: number = +note[1] + 1;

    /**
     * Frequency of note 'A4' (it's common standard)
     */
    const defaultFrequency = 440;

    /**
     * Size of one semitone is once by the twelfth root of two
     * Then 'B4' frequency is 440 * 2^(2/12)
     */
    if (note[2] === '#') {
      return defaultFrequency * Math.pow(2, ((noteInOctave + (octave * 12) + 1) - 70) / 12);
    } else {
      return defaultFrequency * Math.pow(2, ((noteInOctave + (octave * 12)) - 70) / 12);
    }
  }
}
