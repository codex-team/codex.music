import { Instruments } from './types/instruments';
/**
 * Chillout audio class
 */
export default class ChilloutAudio {
    /**
     * TracksManager Field providing tracks' playback management and configuration
     */
    private tracksManager;
    /**
     * Field represents track
     */
    private track;
    /**
     * Initialises application
     * @param notes {String} - notes in melody
     * @param instrument {Instruments} - name of instrument
     */
    constructor(notes?: string, instrument?: Instruments);
    /**
     * Removes tracks' manager from memory
     */
    destroy(): void;
    /**
     * Method for start playing melody
     */
    play(): void;
    /**
     * Method for stop playing melody
     */
    stop(): void;
}
