/**
 * Checking or creating audio
 */
class AudioContextManager {
 /**
  * Field represents AudioContext
  */
 private localContext: AudioContext;

 /**
  * Creating an AudioContext if it is true
  * @return {AudioContext} this.localContext
  */
 get context(): AudioContext {
   if (!this.localContext) {
     this.localContext = new AudioContext();
   }
   return this.localContext;
 }
}

export const audioContextManager = new AudioContextManager();
