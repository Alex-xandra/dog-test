<template>
  <div class="favourites-page">
    <div class="favourites-page-header">Best dogs photos!</div>
    <photos-table :photos="$store.state.favourites"></photos-table>
  </div>
</template>

<script>
import PhotosTable from "../content/PhotosTable";

export default {
  name: 'Home',

  components: {
    PhotosTable
  },

  created() {
    this.uplData();
  },

  methods: {
    uplData() {
      let favourites = localStorage.getItem('favourities')
          ? localStorage.getItem('favourities').split(',')
          : [];

      this.$store.commit('setFavourites', favourites);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/Favourites";
</style>