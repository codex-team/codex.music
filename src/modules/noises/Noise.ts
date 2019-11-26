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
   * Filter that controls noise frequency
   */
  private bandpass: BandPassFilter;

  /**
   * Current frequency of noise node in hertz
   */
  private currentFrequency: number = 1000;

  /**
   * Constructor for noise node
   * @param frequency {Number} - noise frequency in hertz
   */
  constructor(frequency?: number) {
    this.configure();
    if (frequency) {
      this.setNoiseFrequency(frequency);
    }
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
    this.connect(audioContextManager.audioDestination);
  }

  /**
   * Method for stopping noise node
   */
  public stop(): void {
    this.disconnect();
  }

  /**
   * Connect noise node to destination
   * @param destination {AudioNode} - destination for noise node
   */
  public connect(destination: AudioNode): void {
    this.bandpass.filterNode.connect(destination);
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
     * Buffer has 2x sample rate size for better quality
     */
    const bufferSize = 2 * audioContext.sampleRate;

    this.buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);

    /**
     * Get data of the channel 0
     */
    this.buffersChannelData = this.buffer.getChannelData(0);
    this.fillBufferData(bufferSize);

    /**
     * Configure buffer source node
     */
    this.bufferSourceNode = audioContext.createBufferSource();
    this.bufferSourceNode.buffer = this.buffer;

    /**
     * The audio asset must be replayed when the end of the AudioBuffer is reached
     */
    this.bufferSourceNode.loop = true;

    /**
     * Add bandpass filter for filtering required noise frequency
     */
    this.bandpass = new BandPassFilter();
    this.bufferSourceNode.connect(this.bandpass.filterNode);

    /**
     * Finish configuration
     */
    this.bufferSourceNode.start(audioContextManager.currentTime);
  }

  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected abstract fillBufferData(bufferSize: number): void;
}
