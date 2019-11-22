import audioContextManager from '../AudioContextManager';

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

    const bufferSize = 2 * audioContextManager.getAudioContext().sampleRate;

    this.buffer = audioContextManager.getAudioContext().createBuffer(1, bufferSize, audioContextManager.getAudioContext().sampleRate);
    this.buffersChannelData = this.buffer.getChannelData(0);
    this.fillBufferData(bufferSize);
    this.bufferSourceNode.buffer = this.buffer;
    this.bufferSourceNode.loop = true;
    this.bandpass = audioContextManager.getAudioContext().createBiquadFilter();
    this.bandpass.type = 'bandpass';
    this.bufferSourceNode.start(audioContextManager.currentTime);
    this.isConfigured = true;
  }

  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected abstract fillBufferData(bufferSize: number): void;
}
