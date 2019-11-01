import TracksManager from './modules/TracksManager';

/**
 * Chillout audio class
 */
class ChilloutAudio {
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
export { ChilloutAudio };
