import { TracksManager } from './modules/TracksManager';

/**
 * Chillout audio class
 */
class ChilloutAudio {
  /**
   * Initialises application
   */
  constructor() {
    this._tracksManager = new TracksManager();
  }

  /**
   * Getter for Tracks Manager object
   * @return TracksManager instance
   */
  get tracksManager(): TracksManager {
    return this._tracksManager;
  }

  /**
   * Removes tracks' manager from memory
   * @return {Void}
   */
  destroy() {
    delete this._tracksManager;
  }

  /**
   * TracksManager Field providing tracks' playback management and configuration
   */
  private _tracksManager: TracksManager;
}
export { ChilloutAudio };
