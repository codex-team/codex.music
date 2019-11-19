/**
 * Create class Filter.(Using filters, we create high-level, configurable, and ready-to-use modules.
 * These are amplifiers, delay lines, filters, convolution modules, splitters and mergers)
 */
export default abstract class Filter {
  /**
   * Sound knot
   */
  private source: any;
  /**
   * @param source - melody knot
   */
  protected constructor(source:AudioBufferSourceNode) {
    source.start(0);
  }
}
