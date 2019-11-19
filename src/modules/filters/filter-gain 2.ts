import Filter from './filter';

/**
 * Create a  gain filter.
 * Class create a new filter(gain).The module allows you to change the sound signal level.
 */
class GainFilter extends Filter {
  /**
   * New gain object
   */
  private gainNode: any;

  /**
   * Sound knot
   */
  private source: any;

  /**
   *  Loudness sound
   */
  private value: number;

  /**
   * @param gainNode - new gain object
   * @param source - melody knot
   * @param destination - place of purpose
   */
  constructor(gainNode: any, source: any, destination: any) {
    super();
    this.gainNode.gain.value = this.value; // value 0..1 (can be changed dynamically)
    this.source.connect(gainNode); // connect source of melody to object(gainNode)
    gainNode.connect(destination); // connect with place of destination
    source.start(0);
  }
}

export { GainFilter };
