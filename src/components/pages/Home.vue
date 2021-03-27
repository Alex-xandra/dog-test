<template>
  <div class="home">
    <div class="home-header">Dogs are the best!!!</div>
    <photos-table :photos="dogsImgs" :showPages="false"></photos-table>
  </div>
</template>

<script>
import PhotosTable from "../content/PhotosTable";
import $ from "jquery";

export default {
  name: 'Home',

  components: {
    PhotosTable
  },

  data() {
    return {
      dogsImgs: []
    };
  },

  created() {
    this.uplData();
  },

  methods: {
    uplData() {
      this.$store.commit('showLoader', true);
      $("body").addClass("fixed");

      this.axios.get(`https://dog.ceo/api/breeds/image/random/20`).then(response => {
        this.dogsImgs = response.data.message;
      }).finally(() => {
        this.$store.commit('showLoader', false);
        $("body").removeClass("fixed");
      });
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/Home";
</style>
