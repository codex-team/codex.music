import { TracksManager } from './modules/TracksManager';
import { InstrumentTypes } from './modules/instruments';
import { EffectTypes } from './modules/effects';
import { Melody } from './modules/melody/Melody';

/**
 * Chillout audio class
 */
class ChilloutAudio {
  /**
   * getter for tracksManager
   * @return tracksManager
   */
  get tracksManager(): TracksManager {
    return this._tracksManager;
  }

  private _tracksManager: TracksManager;

  /**
   * initialises application
   */
  init() {
    this._tracksManager = new TracksManager();
    console.log('initialised!');
  }

  /**
   * frees application
   */
  destroy() {
    delete this._tracksManager;
    console.log('app is done!');
  }
}
export { ChilloutAudio, TracksManager, EffectTypes, InstrumentTypes, Melody };

const a = new ChilloutAudio();

/*
 * Test
 * /
 * a.init();
 * console.log(a);
 * a.tracksManager.playAll();
 * a.tracksManager.stopAll();
 * a.destroy();
 */
