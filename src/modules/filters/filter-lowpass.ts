import Filter from './filter';

/**
 * The type property of the BiquadFilterNode interface is a string (enum)
 * value defining the kind of filtering algorithm the node is implementing.
 */
class LowPassFilter extends Filter {
  /**
   *
   */
  constructor() {
    super();
    this.node.type = 3;
    this.node.frequency.value = 100;
  }
}
export { LowPassFilter };
