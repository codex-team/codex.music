/**
 * class providing track's configuration and playback
 */

import { Melody } from './melody/Melody';
import { Effect } from './effects/Effect';
import { Instrument } from './instruments/Instrument';
import { InstrumentTypes } from './instruments';
import { EffectTypes } from './effects';

/**
 * class provides track configuration
 */
export class TrackBuilder {
  private _isPlaying: boolean;
  private _melody: Melody;
  private _interval: number;
  private effects: Effect[] = [];
  private volume: number;
  private instrument: Instrument;
  /**
   * creating track with default configuration
   * @this {TrackBuilder}
   */
  constructor() {
    this.createTrack();
  }

  /**
   * sets musical instrument
   * @param instrumentType
   * @return configured musical instrument
   */
  setInstrument(instrumentType:string) {
    try {
      return (this.instrument = new InstrumentTypes[instrumentType]());
    } catch (e) {
      throw new Error('Seems like current instrument does not exist');
    }
  }

  /**
   * @return track's musical instrument
   */
  getInstrument() {
    return this.instrument;
  }

  /**
   * sets the melody of track
   * @param melody
   * @return melody notes
   */
  setMelody(melody: string) {
    this._melody = new Melody(melody);
    return this._melody;
  }

  /**
   * get the melody of track
   * @return melody notes object
   */
  getMelody() {
    return this._melody;
  }

  /**
   * sets interval when the track should repeat after end of playback
   * @param interval
   * @return current interval
   */
  setPlaybackInterval(interval: number) {
    this._interval = interval;
    return this._interval;
  }

  /**
   * @return current interval when the track should repeat after end of playback
   */
  getPlaybackInterval() {
    return this._interval;
  }

  /**
   * adds effect into effects array
   * @param effectType
   * @param index
   * @return added effect
   */
  addEffect(effectType: string, index?:number) {
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
   * @return effects configured for track
   */
  getEffects() {
    return this.effects;
  }

  /**
   * removes effect from current position or the end of array
   * @param index
   * @return removed effect
   */
  removeEffect(index?:number) {
    const position = (this.effects.length > index && index) || this.effects.length - 1;
    const effect = this.effects[position];

    this.effects.splice(position, 1);
    return effect;
  }

  /**
   * set gain for effect on current position or for all effects in the array
   * @param index
   * @param gain
   * @return gain
   */
  setEffectGain(gain, index?:number) {
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
   * get gain from current effect
   * @param index
   * @return gain
   */
  getEffectGain(index:number) {
    return this.effects[index].gain;
  }

  /**
   * sets volume for track
   * @param volume
   * @return volume of track
   */
  setVolume(volume:number) {
    this.volume = volume;
    return this.volume;
  }

  /**
   * @return volume value
   */
  getVolume() {
    return this.volume;
  }

  /**
   * starts playing the current track
   * @return {void}
   */
  play() {
    console.log('playing...');
  }

  /**
   * stops playing the current track
   * @return {void}
   */
  stop() {
    console.log('stopped!');
  }

  /**
   * is track playing
   * @return {boolean} is the current track playing now
   */
  get isPlaying() {
    return this._isPlaying;
  }

  /**
   * set default values for all track properties
   * @this {TrackBuilder}
   * @return {void}
   */
  private createTrack() {
    this.setInstrument('Piano');
    this.setMelody('a4 a5');
    this.addEffect('NullEffect');
    this.setEffectGain(50);
    this.setVolume(50);
  }
}
