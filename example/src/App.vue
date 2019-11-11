<template>
  <div id="app">
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

<style src="./styles/base.css"></style>

<style>
  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
</style>
