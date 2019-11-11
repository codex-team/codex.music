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
   * Name of the instrument.
   */
  public name: string;

  /**
   * Audio source node
   */
  private readonly instrumentSourceNode: OscillatorNode;

  /**
   * Volume of instrument
   */
  private readonly volumeNode: GainNode;

  /**
   * Represents audio node periodic wave
   */
  private waveOptions: WaveOptions = {
    cosineTerms: new Float32Array([0, 1]),
    sineTerms: new Float32Array([0, 0]),
    disableNormalization: false
  };

  /**
   * Audio source node status (true when audio source node is started)
   */
  private isStarted = false;

  /**
   * Instrument status (audio source is already connected with destination)
   */
  private isInstrumentConfigured = false;

  /**
   * Create a instrument
   * @param {string} name - Name of the instrument
   */
  protected constructor(name: string) {
    this.name = name;
    this.instrumentSourceNode = audioContextManager
      .getAudioContext().createOscillator();
    this.volumeNode = audioContextManager
      .getAudioContext().createGain();
    this.instrumentSourceNode.connect(this.volumeNode);
  }

  /**
   * Getter for audioNode property
   */
  public get node():AudioNode {
    return this.volumeNode;
  }

  /**
   * Method to play note
   * @param note {MelodyNote} - note object like MelodyNote
   * @param when {Number} - time when instrument will play note
   */
  public playNote(note: MelodyNote, when: number): void {
    if (!this.isStarted) this.start();
    this.instrumentSourceNode.frequency.setValueAtTime(note.frequency, when);
  }

  /**
   * Setter method for wave type of instrument's audio node
   * @param newWaveOptions {WaveOptions} - new wave options except base wave options
   */
  protected setWave(newWaveOptions: WaveOptions): void {
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
   * @param when {Number} - time when instrument will stop
   */
  public stop(when: number = audioContextManager.getAudioContext().currentTime): void {
    this.volumeNode.gain.cancelScheduledValues(when);
    this.volumeNode.gain.setValueAtTime(0, when);
    this.instrumentSourceNode.frequency.cancelScheduledValues(when);
    this.isStarted = false;
  }

  /**
   * Method to start audio source node
   */
  private start(): void {
    const when = audioContextManager.getAudioContext().currentTime;

    this.volumeNode.gain.setValueAtTime(1, when);
    if (!this.isInstrumentConfigured) {
      this.instrumentSourceNode.start(when);
      this.isInstrumentConfigured = true;
    }
    this.isStarted = true;
  }
}
