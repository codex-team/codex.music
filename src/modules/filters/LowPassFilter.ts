import Filter from './Filter';

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
export default class LowPassFilter extends Filter {
  /**
   * Creating filter settings
   */
  constructor() {
    super();
    this.node.type = 'lowpass';
    this.node.frequency.value = 1000;
    this.node.Q.value = 1000;
  }
}
