/**
 * Class representing an instrument.
 * @extends Audio
 */

class Instrument extends Audio {
    /**
     * Create a instrument.
     * @param {string} instrument - Name of the instrument.
     */
    constructor(instrument) {
        super();
        this.instrument = instrument;
        this.setWave();
    }

    /**
     * Get the wave of instrument.
     * @param {string} instrument - Name of the instrument.
     * @returns {void}
     */

    getWave(instrument) {
        let wave;
        switch (instrument) {
            case 'violin':
                wave = [0, 1, 4 / 9, 4 / 9, 4 / 9, 6 / 9, 5 / 9, 6 / 9, 5 / 9, 3 / 9, 3 / 9, 2 / 9, 1 / 9, 2 / 9, 2 / 9, 1 / 9];
                break;
            case 'viola':
                wave = [0, 3 / 6, 1, 5 / 12, 5 / 6, 2 / 6, 4 / 6, 1 / 6, 2 / 6, 1 / 12, 1 / 6];
                break;
            case 'bass':
                wave = [0, 1, 0.8144, 0.2062, 0.0206];
                break;
            case 'horn':
                wave = [0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8];
                break;
        }
        this.wave = wave;
    }

    /**
     * Set the wave of instrument.
     * @returns {void}
     */

    setWave() {
        this.getWave(this.instrument);
        const image = new Float32Array(this.wave);
        const real = new Float32Array(image.length);
        this.oscillator.setPeriodicWave(this.context.createPeriodicWave(real, image));
    }

}