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
   * Playing interval number
   */
  private interval: number;

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
   * Method to play melody
   */
  private playMelody(): void {
    let timeOffset = audioContextManager.getAudioContext().currentTime;

    this.melody.noteList.forEach(
      (note: MelodyNote) => {
        this.instrument.playNote(note, timeOffset);
        timeOffset += note.length / 1000;
      }
    );
  }

  /**
   * Method to play track
   */
  public play(): void {
    this.instrument.outputNode.connect(audioContextManager.getAudioContext().destination);
    this.playMelody();
    this.interval = setInterval(() => this.playMelody(), this.melody.duration);
  }

  /**
   * Method to stop the track's playback
   */
  public stop(): void {
    this.instrument.outputNode.disconnect();
    this.instrument.stop();
    clearInterval(this.interval);
  }
}
