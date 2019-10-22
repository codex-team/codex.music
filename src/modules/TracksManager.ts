/**
 * class providing tracks management
 */
import { TrackBuilder } from './TrackBuilder';

/**
 * Class providing tracks management
 */
export class TracksManager {
  private readonly _tracks: TrackBuilder[] = [];

  /**
   * @param initialTracksNumber {number} default number of tracks being added in tracks field
   */
  constructor(initialTracksNumber = 3) {
    while (initialTracksNumber--) {
      this.addTrack();
    }
  }

  /**
   * Get tracks array
   * @return {TrackBuilder[]} tracks array
   */
  get tracks() {
    return this._tracks;
  }

  /**
   * adds new trackBuilder into tracks' array
   * @param index - position where to insert new TrackBuilder instance
   * @return new TrackBuilder instance, inserted into tracks array
   */
  addTrack(index?:number) {
    const tb = new TrackBuilder();

    this.tracks.splice(index || this.tracks.length, 0, tb);
    return tb;
  }

  /**
   * removes trackbuilder from tracks array
   * @param index - position of track to remove
   * @return Trackbuider instance removed from tracks array
   */
  removeTrack(index?:number) {
    const position = (this.tracks.length > index && index) || this.tracks.length - 1;
    const removedTrack = this.tracks[position];

    this.tracks.splice(position, 1);
    return removedTrack;
  }

  /**
   * starts all configured tracks from collection
   * @return {void}
   */
  playAll() {
    let tb: TrackBuilder;

    for (tb of this.tracks) tb.play();
  }

  /**
   * stops all configured tracks from collection
   * @return {void}
   */
  stopAll() {
    let tb: TrackBuilder;

    for (tb of this.tracks) tb.stop();
  }

  /**
   * @return {boolean} is any track playing now
   */
  get isPlaying() {
    return this.tracks.some(tb => tb.isPlaying);
  }
}
