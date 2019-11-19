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
 * Class represent object Melody
 * Object has field with array of notes
 */
export declare class Melody {
    /**
     * List of melody notes
     */
    noteList: MelodyNote[];
    /**
     * Default note length in milliseconds
     */
    private defaultLength;
    /**
     * Field with all notes in string
     */
    private readonly notes;
    /**
     * Constructor for class Melody
     * @param {String} notes - string with melody notes
     */
    constructor(notes: string);
    /**
     * Setter for melody default length
     * @param {Number} defaultLength - default note length in milliseconds
     */
    setDefaultLength(defaultLength: number): void;
    /**
     * Parse string to noteList
     * @param {String} notes - string with melody notes
     * @return {MelodyNote[]}
     */
    private parseNoteList;
    /**
     * Get frequency of note in hertz using the formula
     * @param {String} note - new note (like A4)
     * @return {Number} frequency - frequency of note in hertz
     */
    private static getFrequency;
}
