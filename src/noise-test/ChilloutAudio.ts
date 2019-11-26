import Track from './Track';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * Field represents track
   */
  private track: Track | undefined;

  /**
   * Initialises application
   * @param notes {String} - notes in melody
   * @param instrument {Instruments} - name of instrument
   */
  public constructor() {
    this.track = new Track();
  }

  /**
   * Method for start playing melody
   */
  public play(): void {
    if (this.track) {
      this.track.play();
    }
  }

  /**
   * Method for stop playing melody
   */
  public stop(): void {
    if (this.track) {
      this.track.stop();
    }
  }
}
