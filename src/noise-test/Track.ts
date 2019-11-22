import audioContextManager from '../modules/AudioContextManager';
import Noise from '../modules/Noise';

/**
 * Class represents Track implementation and Track configuration
 */
export default class Track {
  /**
   * This property implements audio source logic
   */
  private noise: Noise;

  /**
   * Track status (audio source is already connected with destination)
   */
  private isConfigured = false;

  /**
   * Constructor for track
   */
  public constructor() {
    this.noise = new Noise(200);
  }

  /**
   * Method to connect audio source with destination
   */
  private configure(): void {
    this.noise.connect(audioContextManager.audioDestination);
    this.isConfigured = true;
  }

  /**
   * Method to play noise
   */
  public play(): void {
    if (!this.isConfigured) {
      this.configure();
    }
    this.noise.play();
  }

  /**
   * Method to stop the track's playback
   */
  public stop(): void {
    this.noise.stop();
  }
}
