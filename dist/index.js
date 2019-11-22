(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CodexMusic"] = factory();
	else
		root["CodexMusic"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ChilloutAudio.ts":
/*!******************************!*\
  !*** ./src/ChilloutAudio.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChilloutAudio; });\n/* harmony import */ var _modules_TracksManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TracksManager */ \"./src/modules/TracksManager.ts\");\n/* harmony import */ var _modules_Track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Track */ \"./src/modules/Track.ts\");\n/* harmony import */ var _modules_SineWaveInstrument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/SineWaveInstrument */ \"./src/modules/SineWaveInstrument.ts\");\n/* harmony import */ var _modules_Melody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Melody */ \"./src/modules/Melody.ts\");\n/* harmony import */ var _types_instruments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/instruments */ \"./src/types/instruments.ts\");\n\n\n\n\n\n/**\n * Chillout audio class\n */\nclass ChilloutAudio {\n    /**\n     * Initialises application\n     * @param notes {String} - notes in melody\n     * @param instrument {Instruments} - name of instrument\n     */\n    constructor(notes = 'A4 A5 D3 E4', instrument = _types_instruments__WEBPACK_IMPORTED_MODULE_4__[\"Instruments\"].SINE_WAVE_INSTRUMENT) {\n        this.tracksManager = new _modules_TracksManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        const melody = new _modules_Melody__WEBPACK_IMPORTED_MODULE_3__[\"Melody\"](notes);\n        switch (instrument) {\n            case _types_instruments__WEBPACK_IMPORTED_MODULE_4__[\"Instruments\"].SINE_WAVE_INSTRUMENT:\n                this.track = new _modules_Track__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _modules_SineWaveInstrument__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), melody);\n                break;\n        }\n    }\n    /**\n     * Removes tracks' manager from memory\n     */\n    destroy() {\n        delete this.tracksManager;\n    }\n    /**\n     * Method for start playing melody\n     */\n    play() {\n        if (this.track) {\n            this.track.play();\n        }\n    }\n    /**\n     * Method for stop playing melody\n     */\n    stop() {\n        if (this.track) {\n            this.track.stop();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/ChilloutAudio.ts?");

/***/ }),

/***/ "./src/errors/validationError.ts":
/*!***************************************!*\
  !*** ./src/errors/validationError.ts ***!
  \***************************************/
/*! exports provided: ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidationError\", function() { return ValidationError; });\n/**\n * Custom errors-class ValidationError\n */\nclass ValidationError extends Error {\n    /**\n     * Create errors ValidationError\n     * @param {String} message - errors message\n     */\n    constructor(message) {\n        super(message);\n        this.name = 'ValidationError';\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/errors/validationError.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChilloutAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChilloutAudio */ \"./src/ChilloutAudio.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ChilloutAudio__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://CodexMusic/./src/index.ts?");

/***/ }),

/***/ "./src/modules/AudioContextManager.ts":
/*!********************************************!*\
  !*** ./src/modules/AudioContextManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Class represent AudioContext manager\n * This manager return page's AudioContext\n * If AudioContext doesn't exist, this manager will create it\n */\nclass AudioContextManager {\n    /**\n     * Getter for audioContext field\n     * If audioContext is empty, getter will create new audio context\n     * @return {AudioContext}\n     */\n    getAudioContext() {\n        if (!this.isAudioContextDefined()) {\n            this.createAudioContext();\n        }\n        return this.audioContext;\n    }\n    /**\n     * Private method for creating audio context\n     */\n    createAudioContext() {\n        /**\n         * Cross-browser audio context creation\n         */\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        this.audioContext = new AudioContext();\n    }\n    /**\n     * Method reports if audio context is defined\n     * @return {Boolean}\n     */\n    isAudioContextDefined() {\n        return !!this.audioContext;\n    }\n    /**\n     * Create gain node by audio context\n     * @return {GainNode}\n     */\n    createGain() {\n        if (!this.isAudioContextDefined()) {\n            this.createAudioContext();\n        }\n        return this.audioContext.createGain();\n    }\n    /**\n     * Create oscillator node by audio context\n     * @return {OscillatorNode}\n     */\n    createOscillator() {\n        if (!this.isAudioContextDefined()) {\n            this.createAudioContext();\n        }\n        return this.audioContext.createOscillator();\n    }\n    /**\n     * Create periodic wave by audio context\n     * @param real {Float32Array} - an array of cosine terms (traditionally the A terms)\n     * @param imag {Float32Array} - an array of sine terms (traditionally the B terms)\n     * @param constraints {PeriodicWaveConstraints} - an dictionary object that specifies whether normalization should be disabled\n     * @return {PeriodicWave}\n     */\n    createPeriodicWave(real, imag, constraints) {\n        if (!this.isAudioContextDefined()) {\n            this.createAudioContext();\n        }\n        return this.audioContext.createPeriodicWave(real, imag, constraints);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new AudioContextManager());\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/AudioContextManager.ts?");

/***/ }),

/***/ "./src/modules/Instrument.ts":
/*!***********************************!*\
  !*** ./src/modules/Instrument.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Instrument; });\n/* harmony import */ var _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioContextManager */ \"./src/modules/AudioContextManager.ts\");\n\n/**\n * Class representing an instrument\n */\nclass Instrument {\n    /**\n     * Create a instrument\n     * @param {string} name - Name of the instrument\n     */\n    constructor(name) {\n        /**\n         * Represents audio node periodic wave\n         */\n        this.waveOptions = {\n            cosineTerms: new Float32Array([0, 1]),\n            sineTerms: new Float32Array([0, 0]),\n            disableNormalization: false\n        };\n        /**\n         * Audio source node status (true when audio source node is started)\n         */\n        this.isStarted = false;\n        /**\n         * Instrument status (audio source is already connected with destination)\n         */\n        this.isInstrumentConfigured = false;\n        /**\n         * d\n         */\n        this.audioContext = new AudioContext();\n        this.name = name;\n        this.instrumentSourceNode = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createOscillator();\n        this.volumeNode = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGain();\n        this.instrumentSourceNode.connect(this.volumeNode);\n    }\n    /**\n     * Getter for audioNode property\n     */\n    get node() {\n        return this.volumeNode;\n    }\n    /**\n     * Method to play note\n     * @param note {MelodyNote} - note object like MelodyNote\n     * @param when {Number} - time when instrument will play note\n     */\n    playNote(note, when) {\n        if (!this.isStarted)\n            this.start();\n        this.instrumentSourceNode.frequency.setValueAtTime(note.frequency, when);\n    }\n    /**\n     * Setter method for wave type of instrument's audio node\n     * @param newWaveOptions {WaveOptions} - new wave options except base wave options\n     */\n    setWave(newWaveOptions) {\n        this.waveOptions = Object.assign(Object.assign({}, this.waveOptions), newWaveOptions);\n        const periodicWave = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPeriodicWave(this.waveOptions.cosineTerms, this.waveOptions.sineTerms, {\n            disableNormalization: this.waveOptions.disableNormalization\n        });\n        this.instrumentSourceNode.setPeriodicWave(periodicWave);\n    }\n    /**\n     * Method to stop instrument's playback\n     * @param when {Number} - time when instrument will stop\n     */\n    stop(when = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAudioContext().currentTime) {\n        this.volumeNode.gain.cancelScheduledValues(when);\n        this.volumeNode.gain.setValueAtTime(0, when);\n        this.instrumentSourceNode.frequency.cancelScheduledValues(when);\n        this.isStarted = false;\n    }\n    /**\n     * Method to start audio source node\n     */\n    start() {\n        const when = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAudioContext().currentTime;\n        this.volumeNode.gain.setValueAtTime(1, when);\n        if (!this.isInstrumentConfigured) {\n            this.instrumentSourceNode.start(when);\n            this.isInstrumentConfigured = true;\n        }\n        this.isStarted = true;\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/Instrument.ts?");

/***/ }),

/***/ "./src/modules/Melody.ts":
/*!*******************************!*\
  !*** ./src/modules/Melody.ts ***!
  \*******************************/
/*! exports provided: Melody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Melody\", function() { return Melody; });\n/* harmony import */ var _utils_noteValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/noteValidation */ \"./src/utils/noteValidation.ts\");\n/* harmony import */ var _errors_validationError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/validationError */ \"./src/errors/validationError.ts\");\n\n\n/**\n * Name of notes and their indexes in octave\n */\nvar NoteNames;\n(function (NoteNames) {\n    NoteNames[NoteNames[\"C\"] = 1] = \"C\";\n    NoteNames[NoteNames[\"D\"] = 3] = \"D\";\n    NoteNames[NoteNames[\"E\"] = 5] = \"E\";\n    NoteNames[NoteNames[\"F\"] = 6] = \"F\";\n    NoteNames[NoteNames[\"G\"] = 8] = \"G\";\n    NoteNames[NoteNames[\"A\"] = 10] = \"A\";\n    NoteNames[NoteNames[\"B\"] = 12] = \"B\";\n})(NoteNames || (NoteNames = {}));\n/**\n * Class represent object Melody\n * Object has field with array of notes\n */\nclass Melody {\n    /**\n     * Constructor for class Melody\n     * @param {String} notes - string with melody notes\n     */\n    constructor(notes) {\n        /**\n         * Default note length in milliseconds\n         */\n        this.defaultLength = 300;\n        this.notes = notes;\n        this.noteList = this.parseNoteList(notes);\n    }\n    /**\n     * Setter for melody default length\n     * @param {Number} defaultLength - default note length in milliseconds\n     */\n    setDefaultLength(defaultLength) {\n        this.defaultLength = defaultLength;\n        this.noteList = this.parseNoteList(this.notes);\n    }\n    /**\n     * Parse string to noteList\n     * @param {String} notes - string with melody notes\n     * @return {MelodyNote[]}\n     */\n    parseNoteList(notes) {\n        const noteList = [];\n        notes.toUpperCase().split(' ').map((note) => {\n            let noteObject;\n            if (!Object(_utils_noteValidation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(note)) {\n                throw new _errors_validationError__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"](`Parse error note '${note}'`);\n            }\n            const [noteCode, length] = note.split('x');\n            /**\n             * Parse pause in melody (like '.' or '.x2')\n             */\n            if (noteCode === '.') {\n                noteObject = {\n                    note: 'pause',\n                    frequency: 0.0,\n                    length: (+length || 1) * this.defaultLength\n                };\n                noteList.push(noteObject);\n                return note;\n            }\n            /**\n             * Parse note like 'A4', 'A4x2', 'A4#' or 'A4#x6'\n             */\n            noteObject = {\n                note: noteCode,\n                frequency: Melody.getFrequency(noteCode),\n                length: (+length || 1) * this.defaultLength\n            };\n            noteList.push(noteObject);\n            return note;\n        });\n        return noteList;\n    }\n    /**\n     * Get frequency of note in hertz using the formula\n     * @param {String} note - new note (like A4)\n     * @return {Number} frequency - frequency of note in hertz\n     */\n    static getFrequency(note) {\n        const noteInOctave = NoteNames[note[0]];\n        const octave = +note[1] + 1;\n        /**\n         * Frequency of note 'A4' (it's common standard)\n         */\n        const defaultFrequency = 440;\n        /**\n         * Size of one semitone is once by the twelfth root of two\n         * Then 'B4' frequency is 440 * 2^(2/12)\n         */\n        if (note[2] === '#') {\n            return defaultFrequency * Math.pow(2, ((noteInOctave + (octave * 12) + 1) - 70) / 12);\n        }\n        else {\n            return defaultFrequency * Math.pow(2, ((noteInOctave + (octave * 12)) - 70) / 12);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/Melody.ts?");

/***/ }),

/***/ "./src/modules/SineWaveInstrument.ts":
/*!*******************************************!*\
  !*** ./src/modules/SineWaveInstrument.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SineWaveInstrument; });\n/* harmony import */ var _Instrument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Instrument */ \"./src/modules/Instrument.ts\");\n/* harmony import */ var _types_instruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/instruments */ \"./src/types/instruments.ts\");\n/* harmony import */ var _filters_filter_lowpass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/filter-lowpass */ \"./src/modules/filters/filter-lowpass.ts\");\n\n\n\n/**\n * Class representing an instrument periodic wave\n */\nclass SineWaveInstrument extends _Instrument__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    /**\n     * Create a periodic wave\n     */\n    constructor() {\n        super(_types_instruments__WEBPACK_IMPORTED_MODULE_1__[\"Instruments\"].SINE_WAVE_INSTRUMENT);\n        const waveOptions = {\n            sineTerms: new Float32Array([0, 0]),\n            cosineTerms: new Float32Array([0, 1])\n        };\n        this.setWave(waveOptions);\n        this.setFilterLowPass();\n    }\n    /**\n     * Set low pass filter\n     */\n    setFilterLowPass() {\n        const filter = new _filters_filter_lowpass__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        console.log('setFilterLowPass', filter);\n        filter.connect(this.instrumentSourceNode);\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/SineWaveInstrument.ts?");

/***/ }),

/***/ "./src/modules/Track.ts":
/*!******************************!*\
  !*** ./src/modules/Track.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Track; });\n/* harmony import */ var _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioContextManager */ \"./src/modules/AudioContextManager.ts\");\n\n/**\n * Class represents Track implementation and Track configuration\n */\nclass Track {\n    /**\n     * Constructor for track\n     * @param instrument {Instrument} - chosen musical instrument\n     * @param melody {Melody} - melody to play\n     */\n    constructor(instrument, melody) {\n        /**\n         * Track status (audio source is already connected with destination)\n         */\n        this.isConfigured = false;\n        this.instrument = instrument;\n        this.melody = melody;\n    }\n    /**\n     * Method to connect audio source with destination\n     */\n    configure() {\n        this.instrument.node.connect(_AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAudioContext().destination);\n        this.isConfigured = true;\n    }\n    /**\n     * Method to play melody\n     */\n    play() {\n        if (!this.isConfigured) {\n            this.configure();\n        }\n        let timeOffset = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAudioContext().currentTime;\n        this.melody.noteList.forEach((note) => {\n            this.instrument.playNote(note, timeOffset);\n            timeOffset += note.length / 1000;\n        });\n        this.instrument.stop(timeOffset);\n    }\n    /**\n     * Method to stop the track's playback\n     */\n    stop() {\n        this.instrument.stop();\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/Track.ts?");

/***/ }),

/***/ "./src/modules/TracksManager.ts":
/*!**************************************!*\
  !*** ./src/modules/TracksManager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TracksManager; });\n/**\n * Class providing track builder instances' management\n */\nclass TracksManager {\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/TracksManager.ts?");

/***/ }),

/***/ "./src/modules/filters/filter-lowpass.ts":
/*!***********************************************!*\
  !*** ./src/modules/filters/filter-lowpass.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LowPassFilter; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filters/filter.ts\");\n\n/**\n * The type property of the BiquadFilterNode interface is a string (enum)\n * value defining the kind of filtering algorithm the node is implementing.\n */\nclass LowPassFilter extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    /**\n     *\n     */\n    constructor() {\n        super();\n        this.node.type = 3;\n        this.node.frequency.value = 150;\n        this.node.Q.value = 150;\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/filters/filter-lowpass.ts?");

/***/ }),

/***/ "./src/modules/filters/filter.ts":
/*!***************************************!*\
  !*** ./src/modules/filters/filter.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Filter; });\n/* harmony import */ var _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AudioContextManager */ \"./src/modules/AudioContextManager.ts\");\n\n/**\n * Create class Filter.(Using filters, we create high-level, configurable, and ready-to-use modules.\n * These are amplifiers, delay lines, filters, convolution modules, splitters and mergers)\n */\nclass Filter {\n    // /**\n    //  * create context\n    //  */\n    // protected audioContextManager: AudioContext;\n    // /**\n    //  * d\n    //  */\n    // protected gainNode: any;\n    // /**\n    //  *\n    //  */\n    // protected oscillator: OscillatorNode;\n    //\n    // /**\n    //  * d\n    //  */\n    // protected source: OscillatorNode;\n    /**\n     * create a new filter\n     */\n    constructor() {\n        this.node = _AudioContextManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAudioContext().createBiquadFilter();\n        console.log(' this.node', this.node);\n        /*\n         * this.oscillator = this.audioContextManager.createOscillator();\n         * this.gainNode = this.audioContextManager.createGain();\n         * this.oscillator.connect(this.gainNode);\n         * this.gainNode.connect(this.audioContextManager.destination);\n         */\n    }\n    /**\n     * connect filter and instrument\n     * @param target\n     */\n    connect(target) {\n        target.connect(this.node);\n    }\n}\n\n\n//# sourceURL=webpack://CodexMusic/./src/modules/filters/filter.ts?");

/***/ }),

/***/ "./src/types/instruments.ts":
/*!**********************************!*\
  !*** ./src/types/instruments.ts ***!
  \**********************************/
/*! exports provided: Instruments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Instruments\", function() { return Instruments; });\nvar Instruments;\n(function (Instruments) {\n    Instruments[\"SINE_WAVE_INSTRUMENT\"] = \"Sine wave instrument\";\n})(Instruments || (Instruments = {}));\n\n\n//# sourceURL=webpack://CodexMusic/./src/types/instruments.ts?");

/***/ }),

/***/ "./src/utils/noteValidation.ts":
/*!*************************************!*\
  !*** ./src/utils/noteValidation.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Function validate note\n * @param {String} note - full note name ('A4', 'A4#x2' etc.)\n * @return {Boolean}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (note) {\n    return /^[A-G][0-8](x\\d+)?$/.test(note) || // note like 'E3' or 'G7x2'\n        /^[A-G][0-8]#(x\\d+)?$/.test(note) || // note like 'A4#' or 'B2#x3'\n        /^.(x\\d+)?$/.test(note) || // note like '.' or '.x4'\n        false;\n});\n\n\n//# sourceURL=webpack://CodexMusic/./src/utils/noteValidation.ts?");

/***/ })

/******/ })["default"];
});