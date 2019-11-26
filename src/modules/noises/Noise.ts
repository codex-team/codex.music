import audioContextManager from '../AudioContextManager';
import BandPassFilter from '../filters/BandPassFilter';

/**
 * Class represents noise node
 */
export default abstract class Noise {
  /**
   * Source of noise
   */
  private bufferSourceNode: AudioBufferSourceNode;

  /**
   * Buffer with data about noise
   */
  private buffer: AudioBuffer;

  /**
   * Array of frequencies, that creates noise
   */
  protected buffersChannelData: Float32Array;

  /**
   * Noise node status
   */
  private isConfigured: boolean = false;

  /**
   * Filter that controls noise frequency
   */
  private bandpass: BandPassFilter;

  /**
   * Current frequency of noise node
   */
  private currentFrequency: number;

  /**
   * Destination for noise node
   */
  private destination: AudioNode;

  /**
   * Constructor for noise node
   * @param frequency {Number} - noise frequency in hertz
   */
  constructor(frequency?: number) {
    this.configure();
    if (frequency) {
      this.setNoiseFrequency(frequency);
    } else {
      this.setNoiseFrequency(1000);
    }
  }

  /**
   * Setter for noise destination
   * @param destination {AudioDestinationNode} - audio context destination
   */
  public set noiseDestination(destination: AudioDestinationNode) {
    this.destination = destination;
  }

  /**
   * Set frequency of noise in hertz
   * @param frequency {Number} - new frequency in hertz
   */
  public setNoiseFrequency(frequency: number): void {
    this.bandpass.filterNode.frequency.value = frequency;
    this.currentFrequency = frequency;
  }

  /**
   * Method for starting noise node
   */
  public play(): void {
    this.connect();
  }

  /**
   * Method for stopping noise node
   */
  public stop(): void {
    this.disconnect();
  }

  /**
   * Connect noise node to destination
   */
  private connect(): void {
    if (this.destination) {
      this.bandpass.filterNode.connect(this.destination);
    }
  }

  /**
   * Disconnect noise node from destination
   */
  private disconnect(): void {
    this.bandpass.filterNode.disconnect();
  }

  /**
   * Configure noise node
   */
  private configure(): void {
    const audioContext = audioContextManager.getAudioContext();

    /**
     * Configure buffer
     */
    const bufferSize = 2 * audioContext.sampleRate;

    this.buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    this.buffersChannelData = this.buffer.getChannelData(0);
    this.fillBufferData(bufferSize);

    /**
     * Configure buffer source node
     */
    this.bufferSourceNode = audioContext.createBufferSource();
    this.bufferSourceNode.buffer = this.buffer;
    this.bufferSourceNode.loop = true;

    /**
     * Add bandpass filter
     */
    this.bandpass = new BandPassFilter();
    this.bufferSourceNode.connect(this.bandpass.filterNode);

    /**
     * Finish configuration
     */
    this.bufferSourceNode.start(audioContextManager.currentTime);
    this.isConfigured = true;
  }

  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected abstract fillBufferData(bufferSize: number): void;
}
