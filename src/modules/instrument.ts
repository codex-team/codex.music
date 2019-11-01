/**
 * Class representing an instrument.
 */
export default abstract class Instrument {
  /**
   * @property {string} name - Name of the instrument.
   */
  public name: string;
    
  /**
   * Create a instrument.
   * @param {string} name - Name of the instrument.
   */
  constructor(name: string) {
    this.name = name;
  }
}
