<template>
  <table class="player-table">
    <thead>
      <th>Tracks</th>
      <th>Instrument</th>
      <th>Melody</th>
      <th>Interval, ms</th>
      <th>Effect</th>
      <th>Effect gain</th>
      <th>Track volume</th>
    </thead>
    <tbody>
      <Player></Player>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Player from '../components/Player.vue';

@Component({
  components: {
    Player
  }
})

/**
 * Table view for players
 */
export default class Home extends Vue {}
</script>

<style src="../styles/player.css">
</style>
