import TracksManager from './modules/TracksManager';
import Track from './modules/Track';
import SineWaveInstrument from './modules/SineWaveInstrument';
import { Melody } from './modules/Melody';
import { Instruments } from './types/instruments';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * Initialises application
   */
  public constructor() {
    this.tracksManager = new TracksManager();
  }

  /**
   * Removes tracks' manager from memory
   */
  public destroy(): void {
    delete this.tracksManager;
  }

  /**
   * TracksManager Field providing tracks' playback management and configuration
   */
  private tracksManager: TracksManager;

  private track: Track;

  /**
   * Method for start playing melody
   * @param notes {String} - notes in melody
   * @param instrument {Instruments} - name of instrument
   */
  public play(notes: string = 'A4 A5 D3 E4', instrument: Instruments = Instruments.SINE_WAVE_INSTRUMENT): void {
    const melody = new Melody(notes);

    switch (instrument) {
      case Instruments.SINE_WAVE_INSTRUMENT:
        this.track = new Track(new SineWaveInstrument(), melody);
        break;
    }
    this.track.play();
  }

  /**
   * Method for stop playing melody
   */
  public stop(): void {
    this.track.stop();
  }
}
