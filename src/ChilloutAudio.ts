import tracksManager from './modules/TracksManager';
import { Instruments } from './types/instruments';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * Create new track
   * @param melody {string} - string of notes in melody
   * @param interval {number} - interval between repeat
   * @param instrument {Instruments} - name of instrument for track
   *
   * @todo return track id
   */
  public addTrack({ melody, interval, instrument }:{ melody: string, interval:number, instrument: Instruments }): void {
    tracksManager.addTrack({
      melodyNotes: melody,
      interval,
      instrumentName: instrument
    });
  }

  /**
   * Method for start playing tracks
   *
   * @todo add track id as an optional parameter
   */
  public play(): void {
    tracksManager.playAll();
  }

  /**
   * Method for stop playing melody
   * Method for stop playing tracks
   *
   * @todo add track id as an optional parameter
   */
  public stop(): void {
    tracksManager.stopAll();
  }
}
