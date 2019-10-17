/**
 * @ allFiltrers
 * @ Class create filters
 */
class Filters {
  createGain() {
    /**
     * Create a  gain filter.
     * Class create a new filter(gain).The module allows you to change the sound signal level.
     */
    const gainNode = context.createGain();
    gainNode.gain.value = 0.4;
    source.connect(gainNode);
    gainNode.connect(destination);
    source.start(0);
  }

  createDelay() {
    /**
     * Create a delay and set time.
     * Class create a new filter(delay).This module allows you to delay the sound for a certain time.
     */
    const delayNode = context.createDelay();
    delayNode.delayTime.value = 2;
    source.connect(delayNode);
    delayNode.connect(destination);
    source.start(0);
  }
  createHighPass() {
    /**
     * high-pass filter (cuts off anything below the selected frequency)
     */
    const highPassNode = context.createBiquadFilter();
    highPassNode.type = 2;
    highPassNode.frequency.value = 1000;
    highPassNode.frequency.Q = 1;
  }

  createLowPass() {
    /**
     * low pass filter (cuts off anything above the selected frequency)
     */
    const LowPassNode = context.createBiquadFilter();
    LowPassNode.type = 1;
    LowPassNode.frequency.value = 1000;
    LowPassNode.frequency.Q = 3;
  }

  createBandPass() {
    /**
     * band-pass filter (only allows a certain frequency band)
     */
    const bandPassNode = context.createBiquadFilter();
    bandPassNode.type = 3;
    bandPassNode.frequency.value = 1000;
    bandPassNode.frequency.Q = 3;
  }

  createLowShelf() {
    /**
     *shelf at low frequencies (means that everything below the selected frequency is amplified or weakened)
     */
    const lowShelfNode = context.createBiquadFilter();
    lowShelfNode.type = 4;
    lowShelfNode.frequency.value = 1000;
    lowShelfNode.frequency.Q = 3;
  }

  createHighShelf() {
    /**
     *shelf at high frequencies (means that everything above and above the selected frequency is amplified or weakened)
     */
    const highShelfNode = context.createBiquadFilter();
    highShelfNode.type = 5;
    highShelfNode.frequency.value = 1000;
    highShelfNode.frequency.Q = 3;
  }

  createPeaking() {
    /**
     *narrow-band peak filter (amplifies a certain frequency, the popular name is “filter bell”)
     */
    const peackingNode = context.createBiquadFilter();
    peackingNode.type = 6;
    peackingNode.frequency.value = 1000;
    peackingNode.frequency.Q = 3;
  }

  createNotch() {
    /**
     *narrow-band notch filter (attenuates a certain frequency, the popular name is “filter plug”)
     */
    const notchNode = context.createBiquadFilter();
    notchNode.type = 7;
    notchNode.frequency.value = 1000;
    notchNode.frequency.Q = 3;
  }

  allpass() {
    /**
     *a filter that passes all frequencies of the signal with equal gain, but changes the phase of the signal.
     *This happens when the frequency delay changes. Typically, such a filter is described by one parameter - the frequency at which the phase shift reaches 90 °.
     */
    const allPassNode = context.createBiquadFilter();
    allPassNode.type = 8;
    allPassNode.frequency.value = 1000;
    allPassNode.frequency.Q = 3;
  }
}
