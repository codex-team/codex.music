/**
 *  Class representing an AudioContextManager
 */
class AudioContextManager {

	private _contex: AudioContex;
	
	/**
	 *  Create AudioContext
	 * @returns {AudioContext} _context field
	 */
	get context() {
		if (this._contex == undefined) this._context = new AudioContext;
		return this._context;
	}
}

export default new AudioContextManager();