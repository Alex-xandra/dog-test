<template>
  <div class="table-page">
    <div class="table-cell" v-for="photo in photos"
         @click="setFavourite(photo)">
      <div class="table-cell-item">
        <img class="table-cell-photo" :src="photo">
      </div>
      <div class="photo-overlay">
        <div class="favourite-icon">
          <img v-if="$store.state.favourites.includes(photo)" src="@/assets/imgs/favorite.svg">
          <img v-else src="@/assets/imgs/not-favorite.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablePage",

  props: {
    number: {
      type: Number,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },

  created() {
    let favourites = localStorage.getItem('favourities')
        ? localStorage.getItem('favourities').split(',')
        : [];

    this.$store.commit('setFavourites', favourites);
  },

  methods: {
    setFavourite(photo) {
      if (this.$store.state.favourites.includes(photo)) {
        this.$store.commit('removeFavourite', photo);
      } else {
        this.$store.commit('addFavourite', photo);
      }

      localStorage.setItem('favourities', this.$store.state.favourites);
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/TablePage";
</style>