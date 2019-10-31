import { TrackBuilder } from './TrackBuilder';

/**
 * Class providing track builder instances' management
 */
export class TracksManager {
  /**
   * Contains track builder's instances
   */
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
   * Getter for tracks array
   * @return track builder instances' array
   */
  get tracks() {
    return this._tracks;
  }

  /**
   * Adds new trackBuilder into tracks' array
   * @param index - position where to insert new TrackBuilder instance
   * @return new TrackBuilder instance, inserted into tracks array
   */
  addTrack(index?:number) {
    const tb = new TrackBuilder();

    this.tracks.splice(index || this.tracks.length, 0, tb);
    return tb;
  }

  /**
   * Removes trackbuilder from tracks array
   * @param index - position of track to remove
   * @return Trackbuider instance removed from tracks array
   */
  removeTrack(index?: number) {
    const position = (this.tracks.length > index && index) || this.tracks.length - 1;
    const removedTrack = this.tracks[position];

    this.tracks.splice(position, 1);
    return removedTrack;
  }

  /**
   * Starts playback for all configured tracks from collection
   * @return {void}
   */
  playAll() {
    let tb: TrackBuilder;

    for (tb of this.tracks) tb.play();
  }

  /**
   * Stops all configured tracks from collection
   * @return {void}
   */
  stopAll() {
    let tb: TrackBuilder;

    for (tb of this.tracks) tb.stop();
  }

  /**
   * @return {boolean} is any track being played now
   */
  get isPlaying() {
    return this.tracks.some(tb => tb.isPlaying);
  }
}
