import Filter from './filter';

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
export default class LowPassFilter extends Filter {
  /**
   *
   */
  constructor() {
    super();
    this.node.type = 3;
    this.node.frequency.value = 150;
    this.node.Q.value = 150;
  }
}
