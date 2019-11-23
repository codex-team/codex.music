import { Melody, MelodyNote } from './Melody';
import Instrument from './instruments/Instrument';
import audioContextManager from './AudioContextManager';

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
   * Constructor for track
   * @param instrument {Instrument} - chosen musical instrument
   * @param melody {Melody} - melody to play
   */
  public constructor(instrument: Instrument, melody: Melody) {
    this.instrument = instrument;
    this.melody = melody;
  }

  /**
   * Method to connect audio source with destination
   */
  private configure(): void {
    this.instrument.node.connect(audioContextManager.getAudioContext().destination);
    this.isConfigured = true;
  }

  /**
   * Connect analyzer to instrument
   */
  public connectAnalyzer(): void {
    if (this.isConfigured) {
      this.instrument.node.connect(audioContextManager.analyser);
    }
  }

  /**
   * Method to play melody
   * @param analyser {Boolean} - true if you need to connect analyser to track
   */
  public play(analyser?: boolean): void {
    if (!this.isConfigured) {
      this.configure();
    }
    let timeOffset = audioContextManager.getAudioContext().currentTime;

    if (analyser) {
      this.connectAnalyzer();
    }
    this.melody.noteList.forEach(
      (note: MelodyNote) => {
        this.instrument.playNote(note, timeOffset);
        timeOffset += note.length / 1000;
      }
    );
    this.instrument.stop(timeOffset);
  }

  /**
   * Method to stop the track's playback
   */
  public stop(): void {
    this.instrument.stop();
  }
}
