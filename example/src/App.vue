<template>
  <div id="app">
    Demo application for Codex.Music
    <Home></Home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';

@Component({
  components: {
    Home
  }
})

/**
 * Root app view
 */
export default class App extends Vue {}
</script>

<style>
</style>
