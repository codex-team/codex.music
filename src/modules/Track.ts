import { Melody, MelodyNote } from './Melody';
import Instrument from './Instrument';
import audioContextManager from './AudioContextManager';
import { GainFilter } from './filters/filter-gain';

/**
 * Class represents Track implementation and Track configuration
 */
export default class Track {
  /**
   * This field represents property that contains the musical melody logic
   */
  private melody: Melody;

  /**
   * This property implements audio source logic
   */
  private instrument: Instrument;

  /**
   * Track status (audio source is already connected with destination)
   */
  private isConfigured = false;
  /**
   * Class create a new filter(gain).The module allows you to change the sound signal level.
   */
  public gainFilter: GainFilter;
  /**
   * Constructor for track
   * @param instrument {Instrument} - chosen musical instrument
   * @param melody {Melody} - melody to play
   * @param gainFilter - the module allows you to change the sound signal level
   */

  /**
   * Method to connect audio source with destination
   */
  private configure(): void {
    this.instrument.node.connect(audioContextManager.getAudioContext().destination);
    this.isConfigured = true;
  }

  /**
   * Method to play melody
   */
  public play(): void {
    if (!this.isConfigured) {
      this.configure();
    }
    let timeOffset = audioContextManager.getAudioContext().currentTime;

    this.melody.noteList.forEach(
      (note: MelodyNote) => {
        this.instrument.playNote(note, timeOffset);
        timeOffset += note.length / 1000;
      }
    );
    this.instrument.stop(timeOffset);
    this.gainFilter.value = 1;
  }

  /**
   * Method to stop the track's playback
   */
  public stop(): void {
    this.instrument.stop();
  }
}
