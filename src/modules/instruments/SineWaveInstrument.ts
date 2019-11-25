import Instrument, { WaveOptions } from './Instrument';
import { Instruments } from '../../types/instruments';
import LowPassFilter from '../filters/LowPassFilter';
import audioContextManager from '../AudioContextManager';

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
  setFilterLowPass() {
    this.filter = new LowPassFilter();
    this.volumeNode.connect(this.filter.filterNode);
    this.filter.filterNode.connect(audioContextManager.getAudioContext().destination);
  }
}
