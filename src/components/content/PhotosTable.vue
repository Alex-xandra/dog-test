<template>
  <div class="photos-table">
    <div class="photos-table-pages" v-for="page in pageCount">
      <table-page :class="{'active': activePage === page}" :number="page"
                  :photos="getPagePhotos(page)">
      </table-page>
    </div>
    <div v-if="showPages" class="photos-table-page-navigation">
      <span class="page-navigation-header">Pages:</span>
      <span class="page-navigation-btn" v-for="page in pageCount" @click="openPage(page)">
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script>
import TablePage from "./TablePage";

export default {
  name: "PhotosTable",

  components: {TablePage},

  data() {
    return {
      activePage: 1
    }
  },

  props: {
    photos: {
      type: Array,
      required: true
    },
    showPages: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.photos.length / 20);
    },
  },

  methods: {
    openPage(number) {
      this.activePage = number;
    },
    getPagePhotos(page) {
      let from = (page - 1) * 20;
      let to = from + 20;
      to = to > this.photos.length ? this.photos.length : to;

      return this.photos.slice(from, to)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/PhotosTable";
</style>