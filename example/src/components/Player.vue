<template>
  <tr class="player">
    <td>
      <button class="player__button">
        <div class="player__button-icon"></div>
        <span>Play</span>
      </button>
    </td>
    <td>
      <select class="player__select">
        <option>
          Trumpet
        </option>
        <option>
          Bass
        </option>
      </select>
    </td>
    <td>
      <input class="player__input"
        type="text"
      >
    </td>
    <td>
      <input class="player__input"
        type="text"
      >
    </td>
    <td>
      <select class="player__select">
        <option>
          Chorus
        </option>
        <option>
          Echo
        </option>
        <option>
          None
        </option>
      </select>
    </td>
    <td>
      <input
        :id="$id('effect-gain')"
        type="range"
        min="0"
        max="10"
        step="0.01"
        class="player__range"
      >
      <label
        :for="$id('effect-gain')"
        class="player__label"
      >
        4.53
      </label>
    </td>
    <td>
      <input
        :id="$id('track-volume')"
        type="range"
        min="0"
        max="10"
        step="0.5"
        class="player__range"
      >
      <label
        :for="$id('track-volume')"
        class="player__label"
      >
        9.00
      </label>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})

/**
 * Player component
 */
export default class Player extends Vue {}
</script>

<style src="../styles/player.css"></style>
