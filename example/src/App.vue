<template>
  <div id="app">
    Demo application for Codex.Music
    <button @click="play()">Play</button>
    <button @click="stop()">Stop</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChilloutAudio from "CodexMusic";

@Component({
  components: {},
})
export default class App extends Vue {
  chilloutmusic = new ChilloutAudio();

  play() {
    this.chilloutmusic.play();
  }

  stop() {
    this.chilloutmusic.stop();
  }
}
</script>

<style>
</style>
