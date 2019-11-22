import Noise from './Noise';

/**
 * Class represents brownian noise node
 */
export default class BrownianNoise extends Noise {
  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected fillBufferData(bufferSize: number): void {
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const whiteNoise = Math.random() * 2 - 1;

      this.buffersChannelData[i] = (lastOut + (0.02 * whiteNoise)) / 1.02;
      lastOut = this.buffersChannelData[i];
      this.buffersChannelData[i] *= 3.5;
    }
  }
}
