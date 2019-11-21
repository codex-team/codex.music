import TracksManager from './modules/TracksManager';
import Track from './modules/Track';
import SineWaveInstrument from './modules/SineWaveInstrument';
import HornInstrument from './modules/Horn';
import { Melody } from './modules/Melody';
import { Instruments } from './types/instruments';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * TracksManager Field providing tracks' playback management and configuration
   */
  private tracksManager: TracksManager;

  /**
   * Field represents track
   */
  private track: Track | undefined;

  /**
   * Initialises application
   * @param notes {String} - notes in melody
   * @param instrument {Instruments} - name of instrument
   */
  public constructor(notes: string = 'A4 A5 D3 E4', instrument: Instruments = Instruments.HORN_INSTRUMENT) {
    this.tracksManager = new TracksManager();
    const melody = new Melody(notes);

    switch (instrument) {
      case Instruments.SINE_WAVE_INSTRUMENT:
        this.track = new Track(new SineWaveInstrument(), melody);
        break;
      case Instruments.HORN_INSTRUMENT:
        this.track = new Track(new HornInstrument(), melody);
        break;
    }
  }

  /**
   * Removes tracks' manager from memory
   */
  public destroy(): void {
    delete this.tracksManager;
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
