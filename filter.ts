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

class Delay extends Filter {
  /**
   * Create a delay and set time.
   * Class create a new filter(delay).This module allows you to delay the sound for a certain time.
   */
  constructor(delayNode: any, source: any, destination: any) {
    this.delayNode = context.createDelay();
    delayNode.delayTime.value = 2;
    source.connect(delayNode);
    delayNode.connect(destination);
    source.start(0);
    super()
  }
}
class highPass extends Filter{
  /**
   * high-pass filter (cuts off anything below the selected frequency)
   */
  constructor(highPassNode: any) {
    this.highPassNode = context.createBiquadFilter();
    highPassNode.type = 2;
    highPassNode.frequency.value = 1000;
    highPassNode.frequency.Q = 1;
    super()
  }
}

const gainFilter: Gain = new Gain();
const delayFilter: Delay = new Delay();
const highPassFilter: highPass = new highPass();
