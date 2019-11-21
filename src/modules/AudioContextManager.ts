/**
 * Class represent AudioContext manager
 * This manager return page's AudioContext
 * If AudioContext doesn't exist, this manager will create it
 */
class AudioContextManager {
  /**
   * Field with page's AudioContext
   */
  private audioContext!: AudioContext;

  /**
   * Getter for audioContext field
   * If audioContext is empty, getter will create new audio context
   * @return {AudioContext}
   */
  public getAudioContext(): AudioContext {
    if (!this.isAudioContextDefined()) {
      this.createAudioContext();
    }
    return this.audioContext;
  }

  /**
   * Private method for creating audio context
   */
  private createAudioContext(): void {
    /**
     * Cross-browser audio context creation
     */
    const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;

    this.audioContext = new AudioContext();
  }

  /**
   * create settings of biquadFilter
   * @param biquadFilter
   */
  public createBiquadFilter():void {
    const biquadFilter = this.audioContext.createBiquadFilter();
  }

  /**
   * Method reports if audio context is defined
   * @return {Boolean}
   */
  public isAudioContextDefined(): boolean {
    return !!this.audioContext;
  }

  /**
   * Create gain node by audio context
   * @return {GainNode}
   */
  public createGain(): GainNode {
    if (!this.isAudioContextDefined()) {
      this.createAudioContext();
    }
    return this.audioContext.createGain();
  }

  /**
   * Create oscillator node by audio context
   * @return {OscillatorNode}
   */
  public createOscillator(): OscillatorNode {
    if (!this.isAudioContextDefined()) {
      this.createAudioContext();
    }
    return this.audioContext.createOscillator();
  }

  /**
   * Create periodic wave by audio context
   * @param real {Float32Array} - an array of cosine terms (traditionally the A terms)
   * @param imag {Float32Array} - an array of sine terms (traditionally the B terms)
   * @param constraints {PeriodicWaveConstraints} - an dictionary object that specifies whether normalization should be disabled
   * @return {PeriodicWave}
   */
  public createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave {
    if (!this.isAudioContextDefined()) {
      this.createAudioContext();
    }
    return this.audioContext.createPeriodicWave(real, imag, constraints);
  }
}

export default new AudioContextManager();
