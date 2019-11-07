import audioContextManager from './audioContextManager';
import { MelodyNote } from './Melody';
export interface WaveOptions {
  sineTerms?: Float32Array,
  cosineTerms?: Float32Array,
  disableNormalization?: boolean
}
/**
 * Class representing an instrument.
 */
export default abstract class Instrument {
  /**
   * @property {string} name - Name of the instrument.
   */
  public name: string;
  /**
   * @property {OscillatorNode} instrumentSourceNode - Audio node
   */
  private readonly instrumentSourceNode: OscillatorNode;
  /**
   * @property {AudioParam} instrumentOptions
   */
  private readonly instrumentOptions: GainNode;
  /**
   * @property {WaveOptions} waveOptions - represents audio node periodic wave
   */
  private waveOptions:WaveOptions = {
    cosineTerms: new Float32Array([0, 1]),
    sineTerms: new Float32Array([0, 0]),
    disableNormalization: false
  }

  /**
   * @property isStarted - is the audio source node started
   */
  private isStarted = false;
  private isInstrumentConfigured = false;

  /**
   * Create a instrument.
   * @param {string} name - Name of the instrument.
   */
  protected constructor(name: string) {
    this.name = name;
    this.instrumentSourceNode = audioContextManager
      .getAudioContext().createOscillator();
    this.instrumentOptions = audioContextManager
      .getAudioContext().createGain();
    this.instrumentSourceNode.connect(this.instrumentOptions);
  }

  /**
   * Getter for audioNode property
   */
  public get node():AudioNode {
    return this.instrumentOptions;
  }

  /**
   * Method to play note
   * @param note
   */
  playNote(note:MelodyNote, when: number) {
    if (!this.isStarted) this.start();
    this.instrumentSourceNode.frequency.setValueAtTime(note.frequency, when);
  }

  /**
   * Setter method for wave type of instrument's audio node.
   * @param wave
   */
  protected setWave(newWaveOptions:WaveOptions) {
    this.waveOptions = {
      ...this.waveOptions,
      ...newWaveOptions
    };
    const periodicWave = audioContextManager.getAudioContext().createPeriodicWave(
      this.waveOptions.cosineTerms,
      this.waveOptions.sineTerms,
      {
        disableNormalization: this.waveOptions.disableNormalization
      }

    );

    this.instrumentSourceNode.setPeriodicWave(periodicWave);
  }

  /**
   * Method to stop instrument's playback
   */
  public stop(when = audioContextManager.getAudioContext().currentTime) {
    this.instrumentOptions.gain.cancelScheduledValues(when);
    this.instrumentOptions.gain.setValueAtTime(0, when);
    this.instrumentSourceNode.frequency.cancelScheduledValues(when);
    this.isStarted = false;
  }

  /**
   * Method to start audio source node
   */
  private start() {
    const when = audioContextManager.getAudioContext().currentTime;

    this.instrumentOptions.gain.setValueAtTime(1, when);
    if (!this.isInstrumentConfigured) {
      this.instrumentSourceNode.start(when);
      this.isInstrumentConfigured = true;
    }
    this.isStarted = true;
  }
}
