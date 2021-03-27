<template>
  <div class="breed">
    <div class="breed-header">{{ breed }}</div>
    <photos-table :photos="breedImgs"></photos-table>
  </div>
</template>

<script>
import $ from 'jquery';
import PhotosTable from "../content/PhotosTable";

export default {
  name: 'Breed',

  components: {PhotosTable},

  data() {
    return {
      breed: '',
      breedImgs: []
    };
  },

  created() {
    this.uplData();
  },

  methods: {
    uplData() {
      this.breed = this.$router.currentRoute.params.id;

      this.$store.commit('showLoader', true);
      $("body").addClass("fixed");

      this.axios.get(`https://dog.ceo/api/breed/${this.breed}/images`).then(response => {
        this.breedImgs = response.data.message;
      }).finally(() => {
        this.$store.commit('showLoader', false);
        $("body").removeClass("fixed");
      });
    }
  },

  beforeRouteUpdate(to, from, next) {
    next();
    this.uplData();
  },

  destroyed() {
    $("body").removeClass("fixed");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/Breed";
</style>
