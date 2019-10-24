import { audioContextManager } from './webAudioContextManager';

// console.log(audioContextManager.context);

document.getElementById('test').onclick = () => {
  console.log(audioContextManager.context);
};
