import { TracksManager } from './modules/TracksManager';

/**
 * Chillout audio class
 */
class ChilloutAudio {
  /**
   * Getter for tracksManager
   * @return tracksManager
   */
  private get tracksManager(): TracksManager {
    return this._tracksManager;
  }

  /**
   * Field responsible for tracks management
   */
  private _tracksManager: TracksManager;

  /**
   * Initialises application
   */
  constructor() {
    this._tracksManager = new TracksManager();
    console.log('initialised!');
  }

  /**
   * Removes tracks' manager from memory
   */
  destroy() {
    delete this._tracksManager;
  }
}
export { ChilloutAudio };
