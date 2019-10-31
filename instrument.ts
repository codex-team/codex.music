/**
 * Class representing an instrument.
 */
class Instrument {
    instrument: string;
    waves: object;
    wave: number[];

    /**
     * Create a instrument.
     * @param {string} instrument - Name of the instrument.
     */
    constructor(instrument: string) {
      this.instrument = instrument;
      this.waves = {
        sine: [0, 1]
      };
      this.wave = this.waves[instrument];
    }

    /**
     * Set the wave of instrument.
     * @returns {void}
     */
    setWave(): void {
      if (this.wave) {
        const real = new Float32Array(this.wave);
        const image = new Float32Array(real.length);
        // this.oscillator.setPeriodicWave(this.context.createPeriodicWave(real, image));
      }
    }
}