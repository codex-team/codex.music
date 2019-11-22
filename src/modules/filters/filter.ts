import audioContextManager from '../AudioContextManager';
/**
 * Create class Filter.(Using filters, we create high-level, configurable, and ready-to-use modules.
 * These are amplifiers, delay lines, filters, convolution modules, splitters and mergers)
 */
export default abstract class Filter {
  /**
   * Node of filter
   */
  protected node: any;
  /**
   * create context
   */
  protected audioContextManager: AudioContext;
  /**
   * d
   */
  protected gainNode: any;
  /**
   *
   */
  protected oscillator: OscillatorNode;

  /**
   * d
   */
  protected source: OscillatorNode;
  /**
   * create a new filter
   */
  protected constructor() {
    this.node = this.audioContextManager.createBiquadFilter();
    this.oscillator = this.audioContextManager.createOscillator();
    this.gainNode = this.audioContextManager.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContextManager.destination);
  }

  /**
   * connect filter and instrument
   * @param target
   */
  connect(target) {
    target.connect(this.node);
  }
}
