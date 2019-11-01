/**
 * Class representing an instrument.
 */
export default abstract class Instrument {

    public name: string;

    /**
     * Create a instrument.
     * @param {string} name - Name of the instrument.
     */
    constructor(name: string) {
      this.name = name;
    }

}