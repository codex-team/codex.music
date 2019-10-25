/**
 * Class represent AudioContext manager
 * This manager return page's AudioContext
 * If AudioContext doesn't exist, this manager will create it
 */
class AudioContextManager {
 /**
  * Field with page's AudioContext
  */
 private audioContext: AudioContext;

 /**
  * Getter for audioContext field
  * If audioContext is empty, getter will create new audio context
  * @return {AudioContext}
  */
 public getAudioContext(): AudioContext {
   if (!this.audioContext) {
     /**
      * Cross-browser audio context creation
      */
     const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

     this.audioContext = new AudioContext();
   }
   return this.audioContext;
 }
}

export default new AudioContextManager();
