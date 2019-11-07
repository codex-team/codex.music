import Instrument, { WaveOptions } from './instrument';

/**
 * Class representing an instrument periodic wave
 */
class SineWaveInstrument extends Instrument {
  /**
   * Create a periodic wave.
   * @param {string} name - Name of the instrument.
   */
  constructor() {
    super('Sine wawe instument');
    const waveOptions: WaveOptions = {
      sineTerms: new Float32Array([0, 0]),
      cosineTerms: new Float32Array([0, 1])
    };

    this.setWave(waveOptions);
  }
}

export default SineWaveInstrument;
