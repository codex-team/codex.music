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
   * Getter for tracksManager
   * @return tracksManager
   */
  get tracksManager(): TracksManager {
    return this._tracksManager;
  }

  /**
   * Removes tracks' manager from memory
   */
  destroy() {
    delete this._tracksManager;
  }

  /**
   * Field responsible for tracks management
   */
  private _tracksManager: TracksManager;
}
export { ChilloutAudio };
