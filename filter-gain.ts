import Filter from './filter'

/**
 * Create a  gain filter.
 * Class create a new filter(gain).The module allows you to change the sound signal level.
 */
class Gain extends Filter {
  /**
   * @param gainNode - new gain object
   * @param source - source of melody
   * @param destination - place of destination
   */
  constructor(gainNode: any, source: any, destination: any) {
    super();
    this.gainNode.gain.value = 0.4; // value 0..1 (can be changed dynamically)
    this.source.connect(gainNode); // connect source of melody to object(gainNode)
    gainNode.connect(destination); // connect with place of destination
    source.start(0);
  }
}
