class Gain extends Filter {
  /**
   * Create a  gain filter.
   * Class create a new filter(gain).The module allows you to change the sound signal level.
   */
  constructor(gainNode: any, source: any, destination: any) {
    /**
     * @param gainNode - new gain object
     * @param source - source of melody
     */
    this.gainNode.gain.value = 0.4; // value 0..1 (can be changed dynamically)
    this.source.connect(gainNode);
    gainNode.connect(destination);
    source.start(0);
    super();
  }
}
