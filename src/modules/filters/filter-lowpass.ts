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
   * @param filterLowPass - create a new filter(Low pass)A low-pass filter is a filter that passes signals with a frequency
   * lower than a selected cutoff frequency and attenuates signals with frequencies higher than the cutoff frequency
   */
  protected setFilterLowPass(filterLowPass: BiquadFilterNode): void {
    // @ts-ignore
    this.filterLowPass = audioContextManager.createBiquadFilter();
    filterLowPass.type = 'lowpass';
    filterLowPass.frequency.value = 100;
  }
}
export { LowPassFilter };
