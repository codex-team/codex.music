/**
 * Class represent AudioContext manager
 * This manager return page's AudioContext
 * If AudioContext doesn't exist, this manager will create it
 */
declare class AudioContextManager {
    /**
     * Field with page's AudioContext
     */
    private audioContext;
    /**
     * Getter for audioContext field
     * If audioContext is empty, getter will create new audio context
     * @return {AudioContext}
     */
    getAudioContext(): AudioContext;
    /**
     * Private method for creating audio context
     */
    private createAudioContext;
    /**
     * Method reports if audio context is defined
     * @return {Boolean}
     */
    isAudioContextDefined(): boolean;
    /**
     * Create gain node by audio context
     * @return {GainNode}
     */
    createGain(): GainNode;
    /**
     * Create oscillator node by audio context
     * @return {OscillatorNode}
     */
    createOscillator(): OscillatorNode;
    /**
     * Create periodic wave by audio context
     * @param real {Float32Array} - an array of cosine terms (traditionally the A terms)
     * @param imag {Float32Array} - an array of sine terms (traditionally the B terms)
     * @param constraints {PeriodicWaveConstraints} - an dictionary object that specifies whether normalization should be disabled
     * @return {PeriodicWave}
     */
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
}
declare const _default: AudioContextManager;
export default _default;
