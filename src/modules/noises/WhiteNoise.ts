import Noise from './Noise';

/**
 * Class represents white noise node
 */
export default class WhiteNoise extends Noise {
  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected fillBufferData(bufferSize: number): void {
    for (let i = 0; i < bufferSize; i++) {
      this.buffersChannelData[i] = Math.random() * 2 - 1;
    }
  }
}
