/** Class create a new filter(gain). */
class Gains {
  createNode() {
    /**
     * Create a node.
     */
    const gainNode = context.createGain();
    gainNode.gain.value = 0.4;
  }

  addSourseGain() {
    /**
     * add a sourse for gain.
     */
    source.connect(gainNode);
    gainNode.connect(destination);
  }

  startSourceGain() {
    /**
     * start a source gain.
     */
    source.start(0);
  }
}

/** Class create a new filter(delay). */
class Delay {
  createDelay() {
    /**
     * Create a delay.
     */
    var delayNode = context.createDelay();
    delayNode.delayTime.value = 2;
  }

  addSourceDelay() {
    /**
     * add a source for Delay.
     */
    source.connect(delayNode);
    delayNode.connect(destination);
  }

  startSourceDelay() {
    /**
     * start a source delay.
     */
    source.start(0);
  }
}





