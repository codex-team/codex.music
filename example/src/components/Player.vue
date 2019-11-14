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
  components: {
  }
})

/**
 * Player component
 */
export default class Player extends Vue {
}
</script>

<style>
  .player {
    height: 62px;
    border-bottom: 1px solid var(--color-border-table);
    &__button {
      display: flex;
      align-items: center;
      border: 1px solid var(--color-border-element);
      border-radius: 3px;
      color: var(--color-text-main);
      background: var(--color-bg-element);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      padding: 8px 15px;
      font-weight: 500;
      font-size: 14px;
      height: 32px;
      box-sizing: border-box;

      &-icon {
        display: inline-block;
        float: left;
        background-image: url(../images/icons/triangle.svg);
        height: 10px;
        width: 6px;
        margin-right: 10px;
      }
    }

    &__input {
      box-sizing: border-box;
      height: 32px;
      border: 1px solid var(--color-border-element);
      border-radius: 3px;
      background: var(--color-bg-element);
      color: var(--color-text-main);
      font-weight: 500;
      font-size: 14px;
      padding: 8px 10px;
    }

    &__range {
      -webkit-appearance: none;
      width: 100px;
      background: transparent;
      margin-right: 15px;

      /** Thumb */
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: var(--color-bg-range-thumb);
        cursor: pointer;
        margin-top: -6px;
      }

      &::-moz-range-thumb {
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: var(--color-bg-range-thumb);
        cursor: pointer;
      }

      /** Track */
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: var(--color-bg-range-track);
        border-radius: 3px;
      }

      &::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: var(--color-bg-range-track);
        border-radius: 3px;
      }
    }

    &__label {
      font-size: 14px;
      color: var(--color-bg-label);
    }
  }
</style>
