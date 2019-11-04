import Filter from './filter'

/**
 * Create a  gain filter.
 * Class create a new filter(gain).The module allows you to change the sound signal level.
 */
class GainFilter extends Filter {
  /**
   * new gain object
   */
  public gainNode: any;

  /**
   * source of melody
   */
  public source: any;
  
  constructor(gainNode: any, source: any, destination: any) {
    /**
     * @param connect - takes one parameter, which indicates what you need to connect to.
     * @param start - responsible for filter activation
     * @param value - responsible for dynamically and can be changed
     */
    super();
    this.gainNode.gain.value = 0.4; // value 0..1 (can be changed dynamically)
    this.source.connect(gainNode); // connect source of melody to object(gainNode)
    gainNode.connect(destination); // connect with place of destination
    source.start(0);
  }
}
