import { Melody } from './Melody';
import { Effect } from './effects/Effect';
import { Instrument } from './instruments/Instrument';
import { InstrumentTypes } from './instruments';
import { EffectTypes } from './effects';

/**
 * Class TrackBuilder - provides track configuration
 */
export class TrackBuilder {
  /**
   * Creating track with default configuration
   */
  constructor() {
    this.createTrack();
  }

  /**
   * Sets musical instrument
   * @param instrumentType - type of musical instrument
   * @return configured musical instrument
   */
  setInstrument(instrumentType: string): Instrument {
    try {
      return (this.instrument = new InstrumentTypes[instrumentType]());
    } catch (e) {
      throw new Error('Seems like current instrument does not exist');
    }
  }

  /**
   * Getter method for instrument field
   * @return track's musical instrument
   */
  getInstrument(): Instrument {
    return this.instrument;
  }

  /**
   * Sets the melody of track
   * @param melody - raw (string) representation of melody
   * @return melody notes
   */
  setMelody(melody: string): Melody {
    this.melody = new Melody(melody);
    return this.melody;
  }

  /**
   * Getter method for the melody of track
   * @return {melody} object
   */
  getMelody(): Melody {
    return this.melody;
  }

  /**
   * Sets interval when the track should repeat after end of playback
   * @param interval - numerical value(ms) of chosen interval
   * @return current interval
   */
  setPlaybackInterval(interval: number): number {
    this.interval = interval;
    return this.interval;
  }

  /**
   * Getter method for interval field
   * @return current interval when the track should repeat after end of playback
   */
  getPlaybackInterval(): number {
    return this.interval;
  }

  /**
   * Adds effect into effects array
   * @param effectType - type of effect
   * @param index
   * @return added effect
   */
  addEffect(effectType: string, index?: number): Effect {
    const position = (this.effects.length > index && index) || this.effects.length;

    try {
      const effect = new EffectTypes[effectType]();

      this.effects.splice(position, 0, effect);
      return effect;
    } catch (e) {
      throw new Error('Seems like current effect does not exist');
    }
  }

  /**
   * Getter method for effects array
   * @return effects configured for track
   */
  getEffects(): Effect[] {
    return this.effects;
  }

  /**
   * Removes effect from current position or the end of array
   * @param index
   * @return removed effect
   */
  removeEffect(index?:number): Effect {
    const position = (this.effects.length > index && index) || this.effects.length - 1;
    const effect = this.effects[position];

    this.effects.splice(position, 1);
    return effect;
  }

  /**
   * Setter method for gain from effect on chosen position
   * or for all effects in the array
   * @param index
   * @param gain - chosen numerical value of gain for effect
   * @return gain
   */
  setEffectGain(gain, index?: number): number {
    if (index) {
      this.effects[index].gain = gain;
      return gain;
    }
    this.effects.forEach(ef => {
      ef.gain = gain;
    });
    return gain;
  }

  /**
   * Getter method for gain from chosen effect
   * @param index
   * @return gain
   */
  getEffectGain(index: number): number {
    return this.effects[index].gain;
  }

  /**
   * Setter method for volume.
   * @param volume
   * @return volume of track
   */
  setVolume(volume: number): number {
    this.volume = volume;
    return this.volume;
  }

  /**
   * Getter method for volume
   * @return volume value
   */
  getVolume(): number {
    return this.volume;
  }

  /**
   * Starts playing the current track
   * @return {void}
   */
  play(): void {
    console.log('playing...');
  }

  /**
   * Stops playing the current track
   * @return {void}
   */
  stop(): void {
    console.log('stopped!');
  }

  /**
   * Is track playing
   * @return {boolean} is the current track playing now
   */
  get isPlaying(): boolean {
    return this._isPlaying;
  }

  /**
   * Sets default values for all track properties
   * @return {void}
   */
  private createTrack(): void {
    this.setInstrument('Piano');
    this.setMelody('a4 a5');
    this.addEffect('NullEffect');
    this.setEffectGain(50);
    this.setVolume(50);
  }

  /**
   * Boolean field, true if the track is playing now
   */
  private _isPlaying: boolean;
  /**
   * Melody field, responsible for parsing raw text to melody notes list
   */
  private melody: Melody;
  /**
   * Number field, represents time interval,
   * during which melody, after end, should not start replay
   */
  private interval: number;
  /**
   * Effects array field, responsible for sound effects storage
   */
  private effects: Effect[] = [];
  /**
   * Number field, represents the volume set for track
   */
  private volume: number;
  /**
   * Instrument field, represents the musical instrument set for track
   */
  private instrument: Instrument;
}
