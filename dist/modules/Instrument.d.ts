import { MelodyNote } from './Melody';
/**
 * Interface represents wave options
 */
export interface WaveOptions {
    /**
     * An array of cosine terms (traditionally the A terms)
     */
    sineTerms?: Float32Array;
    /**
     * An array of sine terms (traditionally the B terms)
     */
    cosineTerms?: Float32Array;
    /**
     * Specifies whether normalization should be disabled
     */
    disableNormalization?: boolean;
}
/**
 * Class representing an instrument
 */
export default abstract class Instrument {
    /**
     * Name of the instrument
     */
    name: string;
    /**
     * Audio source node
     */
    private readonly instrumentSourceNode;
    /**
     * Volume of instrument
     */
    private readonly volumeNode;
    /**
     * Represents audio node periodic wave
     */
    private waveOptions;
    /**
     * Audio source node status (true when audio source node is started)
     */
    private isStarted;
    /**
     * Instrument status (audio source is already connected with destination)
     */
    private isInstrumentConfigured;
    /**
     * Create a instrument
     * @param {string} name - Name of the instrument
     */
    protected constructor(name: string);
    /**
     * Getter for audioNode property
     */
    readonly node: AudioNode;
    /**
     * Method to play note
     * @param note {MelodyNote} - note object like MelodyNote
     * @param when {Number} - time when instrument will play note
     */
    playNote(note: MelodyNote, when: number): void;
    /**
     * Setter method for wave type of instrument's audio node
     * @param newWaveOptions {WaveOptions} - new wave options except base wave options
     */
    protected setWave(newWaveOptions: WaveOptions): void;
    /**
     * Method to stop instrument's playback
     * @param when {Number} - time when instrument will stop
     */
    stop(when?: number): void;
    /**
     * Method to start audio source node
     */
    private start;
}
