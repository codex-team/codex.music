import Noise from './Noise';

/**
 * Class represents pink noise node
 */
export default class PinkNoise extends Noise {
  /**
   * Fill the buffer with noise
   * @param bufferSize {Number} - size of buffer
   */
  protected fillBufferData(bufferSize: number): void {
    let b0, b1, b2, b3, b4, b5, b6;

    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const whiteNoise = Math.random() * 2 - 1;

      b0 = 0.99886 * b0 + whiteNoise * 0.0555179;
      b1 = 0.99332 * b1 + whiteNoise * 0.0750759;
      b2 = 0.96900 * b2 + whiteNoise * 0.1538520;
      b3 = 0.86650 * b3 + whiteNoise * 0.3104856;
      b4 = 0.55000 * b4 + whiteNoise * 0.5329522;
      b5 = -0.7616 * b5 - whiteNoise * 0.0168980;
      this.buffersChannelData[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + whiteNoise * 0.5362;
      this.buffersChannelData[i] *= 0.11;
      b6 = whiteNoise * 0.115926;
    }
  }
}
