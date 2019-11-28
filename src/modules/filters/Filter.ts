import audioContextManager from '../AudioContextManager';

/**
 * Create class Filter.(Using filters, we create high-level, configurable, and ready-to-use modules.
 * These are amplifiers, delay lines, filters, convolution modules, splitters and mergers)
 */
export default abstract class Filter {
  /**
   * Node of filter
   */
  protected node: BiquadFilterNode;

  /**
   * Create a new filter
   */
  protected constructor() {
    this.node = audioContextManager.getAudioContext().createBiquadFilter();
  }

  /**
   * Getter for filter node
   * @return {BiquadFilterNode}
   */
  public get filterNode(): BiquadFilterNode {
    return this.node;
  }

  /**
   * Connect filter and instrument
   * @param {AudioNode} target - node for connecting filter
   */
  public connect(target: AudioNode): void {
    target.connect(this.node);
  }
}
