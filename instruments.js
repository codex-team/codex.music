/**
 * Class representing an instrument.
 */

class Instrument {

    /**
     * Create a instrument.
     * @param {string} instrument - Name of the instrument.
     */
    
    constructor(instrument) {
        this.instrument = instrument;
        this.waves = {
            "violin": [0, 1, 4 / 9, 4 / 9, 4 / 9, 6 / 9, 5 / 9, 6 / 9, 5 / 9, 3 / 9, 3 / 9, 2 / 9, 1 / 9, 2 / 9, 2 / 9, 1 / 9],
            "viola": [0, 3 / 6, 1, 5 / 12, 5 / 6, 2 / 6, 4 / 6, 1 / 6, 2 / 6, 1 / 12, 1 / 6],
            "bass": [0, 1, 0.8144, 0.2062, 0.0206],
            "horn": [0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8]
        }
        this.wave = this.waves[instrument];
    }

    /**
     * Set the wave of instrument.
     * @returns {void}
     */

    setWave() {
        if (this.wave) {
            const image = new Float32Array(this.wave);
            const real = new Float32Array(image.length);
            this.oscillator.setPeriodicWave(this.context.createPeriodicWave(real, image));
        }
    }

}