import Filter from "./filter";

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
class LowPassFilter extends Filter {
  /**
   * Create a new filter
   */
  private filter: any;

  /**
   *
   * @param filter - create a ew filter
   */
  constructor(filter: BiquadFilterNode){
    super();
    this.filter = AudioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 100;
  }
}
