import Instrument, { WaveOptions } from '../Instrument';
import { Instruments } from '../../types/instruments';

/**
 * Class representing an instrument periodic wave
 */
class SineWaveInstrument extends Instrument {
  /**
   * Create a periodic wave
   */
  constructor() {
    super(Instruments.SINE_WAVE_INSTRUMENT);
    const waveOptions: WaveOptions = {
      sineTerms: new Float32Array([0, 0]),
      cosineTerms: new Float32Array([0, 1])
    };

    this.setWave(waveOptions);
  }
}

export default SineWaveInstrument;
