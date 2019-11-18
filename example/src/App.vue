<template>
  <div id="app">
    Demo application for Codex.Music
    <button @click="play()">Play</button>
    <button @click="stop()">Stop</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChilloutMusic from '../../dist';

@Component({
  components: {},
})
export default class App extends Vue {
  chilloutmusic = new ChilloutMusic();

  play() {
    console.log(ChilloutMusic);
  }

  stop() {
    this.chilloutmusic.stop();
  }
}
</script>

<style>
</style>
