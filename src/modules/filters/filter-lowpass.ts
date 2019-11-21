import Filter from './filter';

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
class LowPassFilter extends Filter {
  /**
   * Create a new filter
   */
  readonly filterLowPass: any;

  /**
   *
   * @param filterLowPass - create a ew filter
   */
  constructor(filterLowPass: BiquadFilterNode) {
    super();
    this.filterLowPass.type = 'lowpass';
    filterLowPass.frequency.value = 100;
  }
}
export { LowPassFilter };
