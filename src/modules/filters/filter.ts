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
   * create a new filter
   */
  protected constructor() {
    this.node = audioContextManager.getAudioContext().createBiquadFilter();
  }

  /**
   * connect filter and instrument
   * @param target
   */
  connect(target) {
    target.connect(this.node);
  }
}
