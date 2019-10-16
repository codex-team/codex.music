class Gains {
  createNode() {
    const gainNode = context.createGain();
    gainNode.gain.value = 0.4;
  }

  addSourse() {
    source.connect(gainNode);
    gainNode.connect(destination);
  }

  startSource() {
    source.start(0);
  }
}

