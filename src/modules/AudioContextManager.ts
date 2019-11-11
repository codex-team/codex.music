/**
 * Class represent AudioContext manager
 * This manager return page's AudioContext
 * If AudioContext doesn't exist, this manager will create it
 */
class AudioContextManager {
  /**
   * Field with page's AudioContext
   */
  private audioContext: AudioContext;

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
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

    this.audioContext = new AudioContext();
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
}

export default new AudioContextManager();
