import Instrument, { WaveOptions } from './Instrument';
import { Instruments } from '../../types/instruments';
import LowPassFilter from '../filters/LowPassFilter';

/**
 * Class representing an instrument periodic wave
 */
export default class SineWaveInstrument extends Instrument {
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
    this.setFilterLowPass();
  }

  /**
   * Set low pass filter
   */
  private setFilterLowPass(): void {
    const filter = new LowPassFilter();

    filter.connect(this.lastNode);
    this.addNodeToNodeChain(filter.filterNode);
  }
}
