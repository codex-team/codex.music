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

<style>
  .player-table {
    margin: 0 auto;
    width: 1105px;
    border-collapse: collapse;
    thead {
      color: var(--color-text-second);
      font-size: 16px;
      text-align: left;
      th {
        vertical-align: middle;
        height: 40px;
        border-bottom: 1px solid var(--color-border-table);
      }
    }
  }
</style>
