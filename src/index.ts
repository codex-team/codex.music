import TracksManager from './modules/TracksManager';
import Track from './modules/Track';
import SineWaveInstrument from './modules/SineWaveInstrument';
import { Melody } from './modules/Melody';

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
}
let t: Track;

document.getElementById('play').onclick = () => {
  const melody = new Melody('A4 A5 D3 e4 d4 f8 a6 b3 c2 A5 A4');

  // melody.setDefaultLength(2000);
  t = t || new Track(new SineWaveInstrument(), melody);
  t.play();
};
document.getElementById('stop').onclick = () => {
  t.stop();
};
