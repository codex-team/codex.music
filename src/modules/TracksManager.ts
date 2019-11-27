import { Instruments } from '../types/instruments';
import Track from './Track';
import SineWaveInstrument from './instruments/SineWaveInstrument';
import HornInstrument from './instruments/Horn';
import Instrument from './instruments/Instrument';
import { Melody } from './Melody';

/**
 * Class providing track builder instances' management
 */
class TracksManager {
  /**
   * Array of tracks in tracks manager
   */
  private tracks: Track[] = [];

  /**
   * Create new track
   * @param melodyNotes {String} - string of notes in melody
   * @param interval {Number} - interval between repeat
   * @param instrumentName {Instruments} - name of instrument for track
   */
  public addTrack({ melodyNotes, interval, instrumentName }:{ melodyNotes: string, interval: number, instrumentName: Instruments }): void {
    let instrument: Instrument;

    switch (instrumentName) {
      case Instruments.SINE_WAVE_INSTRUMENT:
        instrument = new SineWaveInstrument();
        break;
      case Instruments.HORN_INSTRUMENT:
        instrument = new HornInstrument();
        break;
    }
    const melody = new Melody(melodyNotes);
    const track = new Track(instrument, melody);

    this.tracks.push(track);
  }

  /**
   * Play all tracks in tracks manager
   */
  public playAll(): void {
    this.tracks.map((track) => {
      track.play();
    });
  }

  /**
   * Stop all tracks in tracks manager
   */
  public stopAll(): void {
    this.tracks.map((track) => {
      track.stop();
    });
  }
}

export default new TracksManager();
