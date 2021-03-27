<template>
  <div id="app">
    <app-header></app-header>
    <loader v-if="$store.state.showLoader"></loader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/content/AppHeader';
import Loader from "./components/content/Loader";

export default {
  components: {
    Loader,
    AppHeader
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/App";
</style>