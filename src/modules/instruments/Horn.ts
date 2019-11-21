import Instrument, { WaveOptions } from '../Instrument';
import { Instruments } from '../../types/instruments';

/**
 * Class representing an horn instrument
 */
export default class Horn extends Instrument {
  /**
   * Create a horn instrument
   */
  constructor() {
    super(Instruments.HORN_INSTRUMENT);
    const waveOptions: WaveOptions = {
      sineTerms: new Float32Array(12),
      cosineTerms: new Float32Array([0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8])
    };

    this.setWave(waveOptions);
  }
}
