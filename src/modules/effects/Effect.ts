/**
 * effect abstract class, contains methods for implementation
 */
export abstract class Effect {
  /**
   * type of effect
   */
  private type: string;
  /**
   * gain value for effect
   */
  private _gain: number = 50;

  /**
   * gain setter
   * @param gain
   */
  set gain(gain) {
    this._gain = gain;
  }

  /**
   * gain getter
   * @return gain
   */
  get gain() {
    return this._gain;
  }
}
