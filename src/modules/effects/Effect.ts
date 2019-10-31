/**
 *  Abstract class, representing sound effect, containing methods for implementation
 */
export abstract class Effect {
  /**
   * Setter for gain
   * @param gain
   */
  set gain(gain) {
    this._gain = gain;
  }

  /**
   * Getter for gain
   * @return gain
   */
  get gain() {
    return this._gain;
  }

  /**
   * Type of effect
   */
  private type: string;
  /**
   * Gain value for effect
   */
  private _gain: number = 50;
}
