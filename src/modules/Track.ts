/**
 * Class Track - provides track configuration
 */
import { Melody, MelodyNote } from './Melody';
import Instrument from './instrument';
import audioContextManager from './audioContextManager';
/**
 * Class represents Track implementation
 */
export default class Track {
  /**
   * this field represents property that contains the musical melody logic
   */
  private melody: Melody;
  /**
   * this property implements audio source logic
   */
  private instrument: Instrument;
  /**
   * @property {Boolean} is the Track configured(audio source is already connected with destination)
   */
  private isConfigured = false

  /**
   * @property {number} timeOffset - time to recognize when the note should be played
   */
  private timeOffset: number;
  /**
   * Constructor for track
   * @param instrument - chosen musical instrument
   * @param melody - melody to play
   */
  public constructor(instrument?:Instrument, melody?:Melody) {
    this.instrument = instrument;
    this.melody = melody;
  }

  /**
   * Method to connect audio source with destination
   */
  private configure() {
    this.instrument.node.connect(audioContextManager.getAudioContext().destination);
    this.isConfigured = true;
  }

  /**
   * Method to play melody
   */
  public play() {
    if (!this.isConfigured) this.configure();
    this.timeOffset = audioContextManager.getAudioContext().currentTime;
    this.melody.noteList.forEach(
      (note: MelodyNote) => {
        this.instrument.playNote(note, this.timeOffset);
        this.timeOffset += note.length / 1000;
      }
    );
    this.instrument.stop(this.timeOffset);
  }

  /**
   * Method to stop the track's playback
   */
  public stop() {
    this.instrument.stop();
  }
}
