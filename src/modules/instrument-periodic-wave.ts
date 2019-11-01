import Instrument from './instrument';

/**
 * Class representing an instrument periodic wave
 */
class PeriodicWaveInstrument extends Instrument {
  /**
  * @property {object} waves - List of all instruments waves
  * @property {number[]} wave - Current wave
  */
  public waves: object;
  public wave: number[];

  /**
  * Create a periodic wave.
  * @param {string} name - Name of the instrument.
  */
  constructor(name: string) {
    super(name);
    this.waves = {
      sine: [0, 1]
    };
    this.wave = this.waves[name];
  }

  /**
  * Set the instrument wave.
  * @returns {void}
  */
  public setWave(): void {
    if (this.wave) {
      const real = new Float32Array(this.wave);
      const image = new Float32Array(real.length);
    }
  }
}
