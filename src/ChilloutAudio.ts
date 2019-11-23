import TracksManager from './modules/TracksManager';
import Track from './modules/Track';
import SineWaveInstrument from './modules/instruments/SineWaveInstrument';
import HornInstrument from './modules/instruments/Horn';
import { Melody } from './modules/Melody';
import { Instruments } from './types/instruments';
import audioContextManager from './modules/AudioContextManager';

/**
 * Chillout audio class
 */
export default class ChilloutAudio {
  /**
   * TracksManager Field providing tracks' playback management and configuration
   */
  private tracksManager: TracksManager;

  /**
   * Field represents track
   */
  private track: Track | undefined;

  /**
   * Initialises application
   * @param notes {String} - notes in melody
   * @param instrument {Instruments} - name of instrument
   */
  public constructor(notes: string = 'A4 A5 D3 E4', instrument: Instruments = Instruments.HORN_INSTRUMENT) {
    this.tracksManager = new TracksManager();
    const melody = new Melody(notes);

    switch (instrument) {
      case Instruments.SINE_WAVE_INSTRUMENT:
        this.track = new Track(new SineWaveInstrument(), melody);
        break;
      case Instruments.HORN_INSTRUMENT:
        this.track = new Track(new HornInstrument(), melody);
        break;
    }
  }

  /**
   * Removes tracks' manager from memory
   */
  public destroy(): void {
    delete this.tracksManager;
  }

  /**
   * Method for start playing melody
   */
  public play(): void {
    if (this.track) {
      this.track.play(true);
    }
  }

  /**
   * Method for stop playing melody
   */
  public stop(): void {
    if (this.track) {
      this.track.stop();
    }
  }

  /**
   * Connect analyser to canvas and start drawing
   * @param canvas {HTMLCanvasElement} - canvas element on page
   */
  public connectAnalyserToCanvas(canvas: HTMLCanvasElement): void {
    const bufferLength = audioContextManager.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvasContext = canvas.getContext('2d');
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;

    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

    /**
     * Function draws frequencies in canvas
     */
    function draw() {
      window.requestAnimationFrame(draw);
      audioContextManager.analyser.getByteTimeDomainData(dataArray);
      canvasContext.fillStyle = 'rgb(200, 200, 200)';
      canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = 'rgb(0, 0, 0)';
      canvasContext.beginPath();
      const sliceWidth = canvasWidth * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * canvasHeight / 2;

        if (i === 0) {
          canvasContext.moveTo(x, y);
        } else {
          canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
      }
      canvasContext.lineTo(canvas.width, canvas.height / 2);
      canvasContext.stroke();
    }
    draw();
  }
}
