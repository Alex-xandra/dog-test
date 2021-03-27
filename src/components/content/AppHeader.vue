<template>
  <div class="main-header">
    <router-link to="/">
      <img alt="dog_logo" src="@/assets/imgs/dog-api-logo.svg" class="main-header-logo">
    </router-link>
    <ul class="main-header-list">
      <li class="main-header-list-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="main-header-list-item breed-item">
        <span>Breeds</span>
        <div class="additional-header">
          <ul class="additional-header-list">
            <li v-for="breed in breeds" class="additional-header-list-item">
              <router-link :to="'/breed/'+ breed"><span>{{ breed }}</span></router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="main-header-list-item">
        <router-link to="/favourites">Favourites</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      breeds: []
    };
  },

  created() {
    this.axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      this.breeds = Object.keys(response.data.message);
    });
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/AppHeader";
</style>
