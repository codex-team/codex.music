import Filter from './filter';

/**
 * Create a  gain filter.
 * Class create a new filter(gain).The module allows you to change the sound signal level.
 */
class GainFilter extends Filter {
  /**
   * Interface represents a change in volume
   */
  private gainNode: any;

  /**
   * Interfaces allow you to add audio spatialization panning effects to your audio
   */
  private source: any;

  /**
   *  Loudness sound
   */
  public value: number;

  /**
   * @param gainNode - interface represents a change in volume
   * @param source - interfaces allow you to add audio spatialization panning effects to your audio
   * @param destination - once you are done processing your audio, these interfaces define where to output it.
   */
  constructor(gainNode: GainNode, source: AudioBufferSourceNode, destination: AudioNode) {
    super();
    this.gainNode.gain.value = this.value; // value 0..1 (can be changed dynamically)
    this.source.connect(gainNode); // connect source of melody to object(gainNode)
    gainNode.connect(destination); // connect with place of destination
  }
}

export { GainFilter };
