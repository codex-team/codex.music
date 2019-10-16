const gainNode = context.createGain();
gainNode.gain.value = 0.4;

source.connect(gainNode);
gainNode.connect(destination);

source.start(0);
