import Filter from './Filter';

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
export default class BandPassFilter extends Filter {
  /**
   * Creating filter settings
   */
  constructor() {
    super();
    this.node.type = 'bandpass';
    this.node.frequency.value = 1000;
  }
}
