import audioContextManager from './AudioContextManager';

/**
 * Class represents noise node
 */
export default class Noise {
  /**
   * Source of noise
   */
  private bufferNode: AudioBufferSourceNode;

  /**
   * Buffer with data about noise
   */
  private buffer: AudioBuffer;

  /**
   * Array of frequencies, that creates noise
   */
  private buffersChannelData: Float32Array;

  /**
   * Noise node status
   */
  private isConfigured: boolean = false;

  /**
   * Filter that controls noise frequency
   */
  private bandpass: BiquadFilterNode;

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
   * Connect noise node to audio context destination
   * @param destination {AudioDestinationNode} - audio context destination
   */
  public connect(destination: AudioDestinationNode): void {
    if (this.isConfigured) {
      this.bufferNode.connect(this.bandpass).connect(destination);
    }
  }

  /**
   * Set frequency of noise in hertz
   * @param frequency {Number} - new frequency in hertz
   */
  public setNoiseFrequency(frequency: number): void {
    if (this.isConfigured) {
      this.bandpass.frequency.value = frequency;
    }
  }

  /**
   * Method for starting noise node
   * @param when {Number} - time for starting node (default - audioContext.currentTime)
   */
  public play(when: number = audioContextManager.currentTime): void {
    if (this.isConfigured) {
      this.bufferNode.start(when);
    }
  }

  /**
   * Method for stopping noise node
   * @param when {Number} - time for stopping node (default - audioContext.currentTime)
   */
  public stop(when: number = audioContextManager.currentTime): void {
    if (this.isConfigured) {
      this.bufferNode.stop(when);
    }
  }

  /**
   * Configure noise node
   */
  private configure(): void {
    this.bufferNode = audioContextManager.getAudioContext().createBufferSource();

    /**
     * Create buffer for noise
     * Default buffer size is 2^12 = 4096
     */
    this.buffer = audioContextManager.getAudioContext().createBuffer(1, 4096, audioContextManager.getAudioContext().sampleRate);
    this.buffersChannelData = this.buffer.getChannelData(0);

    /**
     * Fill the buffer with noise
     */
    for (let i = 0; i < 4096; i++) {
      this.buffersChannelData[i] = Math.random() * 2 - 1;
    }
    this.bufferNode.buffer = this.buffer;
    this.bufferNode.loop = true;
    this.bandpass = audioContextManager.getAudioContext().createBiquadFilter();
    this.bandpass.type = 'bandpass';
    this.isConfigured = true;
  }
}
