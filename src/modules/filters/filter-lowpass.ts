import Filter from './filter';
import audioContextManager from "../AudioContextManager";

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
  protected setFilterLowPass(filterLowPass: BiquadFilterNode): void {
    // @ts-ignore
    this.filterLowPass = audioContextManager.createBiquadFilter();
    filterLowPass.type = 'lowpass';
    filterLowPass.frequency.value = 100;
  }
}
export { LowPassFilter };
