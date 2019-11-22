import audioContextManager from './AudioContextManager';

/**
 * Class represents noise node
 */
export default class Noise {
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
   * Current frequency of noise node
   */
  private currentFrequency: number;

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
    this.bufferSourceNode.connect(this.bandpass).connect(destination);
  }

  /**
   * Set frequency of noise in hertz
   * @param frequency {Number} - new frequency in hertz
   * @param when {Number} - time for set noise frequency (default - audio context current time)
   */
  public setNoiseFrequency(frequency: number, when: number = audioContextManager.currentTime): void {
    this.bandpass.frequency.setValueAtTime(frequency, when);
    this.currentFrequency = frequency;
  }

  /**
   * Method for starting noise node
   */
  public play(): void {
    this.setNoiseFrequency(this.currentFrequency);
  }

  /**
   * Method for stopping noise node
   */
  public stop(): void {
    this.bandpass.frequency.setValueAtTime(0, audioContextManager.currentTime);
  }

  /**
   * Configure noise node
   */
  private configure(): void {
    this.bufferSourceNode = audioContextManager.getAudioContext().createBufferSource();

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
    this.bufferSourceNode.buffer = this.buffer;
    this.bufferSourceNode.loop = true;
    this.bandpass = audioContextManager.getAudioContext().createBiquadFilter();
    this.bandpass.type = 'bandpass';
    this.bufferSourceNode.start(audioContextManager.currentTime);
    this.isConfigured = true;
  }
}
