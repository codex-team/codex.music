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
   * @return {Number} - index of new track
   */
  public addTrack({ melody, interval, instrument }: { melody: string, interval: number, instrument: Instruments }): number {
    return tracksManager.addTrack({
      melodyNotes: melody,
      interval,
      instrumentName: instrument
    });
  }

  /**
   * Method for start playing tracks
   * @param trackId {Number} - if there is this parameter, track manager play track with this id
   */
  public play(trackId?: number): void {
    if (trackId) {
      tracksManager.playTrackById(trackId);
    } else {
      tracksManager.playAll();
    }
  }

  /**
   * Method for stop playing tracks
   * @param trackId {Number} - if there is this parameter, track manager stop track with this id
   */
  public stop(trackId?: number): void {
    if (trackId) {
      tracksManager.stopTrackById(trackId);
    } else {
      tracksManager.stopAll();
    }
  }
}
