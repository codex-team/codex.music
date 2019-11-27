import tracksManager from './modules/TracksManager';
import { Instruments } from './types/instruments';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * Create new track
   * @param melodyNotes {String} - string of notes in melody
   * @param interval {Number} - interval between repeat
   * @param instrumentName {Instruments} - name of instrument for track
   */
  public addTrack({ melodyNotes, interval, instrumentName }:{ melodyNotes: string, interval:number, instrumentName: Instruments }): void {
    tracksManager.addTrack({
      melodyNotes,
      interval,
      instrumentName
    });
  }

  /**
   * Method for start playing tracks
   */
  public play(): void {
    tracksManager.playAll();
  }

  /**
   * Method for stop playing tracks
   */
  public stop(): void {
    tracksManager.stopAll();
  }
}
