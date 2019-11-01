class Filter {

}

class Gain extends Filter {
  /**
   * Create a  gain filter.
   * Class create a new filter(gain).The module allows you to change the sound signal level.
   */
  constructor(gainNode: any, source: any, destination: any) {
    this.gainNode.gain.value = 0.4;
    this.source.connect(gainNode);
    gainNode.connect(destination);
    source.start(0);
    super();
  }
}

const gainFilter: Gain = new Gain();
