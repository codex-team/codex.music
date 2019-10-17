class AudioContextManager {
	private _contex: AudioContex;

	get context() {
		if (this._contex == undefined) this._context = new AudioContext;
		return this._context;
	}
}

export default new AudioContextManager();