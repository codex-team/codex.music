import { Melody } from './Melody';
import Instrument from './Instrument';
/**
 * Class represents Track implementation and Track configuration
 */
export default class Track {
    /**
     * This field represents property that contains the musical melody logic
     */
    private melody;
    /**
     * This property implements audio source logic
     */
    private instrument;
    /**
     * Track status (audio source is already connected with destination)
     */
    private isConfigured;
    /**
     * Constructor for track
     * @param instrument {Instrument} - chosen musical instrument
     * @param melody {Melody} - melody to play
     */
    constructor(instrument: Instrument, melody: Melody);
    /**
     * Method to connect audio source with destination
     */
    private configure;
    /**
     * Method to play melody
     */
    play(): void;
    /**
     * Method to stop the track's playback
     */
    stop(): void;
}
