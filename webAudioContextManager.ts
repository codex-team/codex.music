  /**
 * @typedef {object} AudioContextConfig
 * @property {object} AudioContext - part of a melody
 */


/**
 *Checking or creating audio
*/
class AudioContextManager.ts {
	
	/**
	 * @param  {AudioContextConfig} settings - melody configuration obj
	 */
	constructor(settings) {
		private _context: AudioContext;
	}
	
	/**
	 * Crearing an AdioContex if it is true
	 * @retuts {AudioContext} this._context
	 */
	get context() {
		if (this._context == undefined) 
			{this._context = new AudioContext};
		return this._context;
	}
}

export default new AudioContextManager.ts();