<template>
  <h2 class="red" v-if="displayEmptySearch">Enter a mouvie name</h2>

  <input
    class="input"
    v-model.trim.lazy="searchQuery"
    type="text"
    placeholder="Search Movie"
  />
  <router-link
    :to="{
      name: 'Search',
    }"
  >
    <button @click="searchAction">Search</button>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      displayEmptySearch: false,
      searchQuery: "",
      // url:
      //   "https://api.themoviedb.org/3/search/movie?api_key=0150f230986e887a5efff2e0af9009b0&query=" +
      //   this.$store.state.searchQuery,
    };
  },

  methods: {
    searchAction() {
      this.$store.commit("searchQueryUpdate", this.searchQuery);
      if (this.searchQuery !== "") {
        this.$store.commit(
          "urlUpdate",
          "https://api.themoviedb.org/3/search/movie?api_key=0150f230986e887a5efff2e0af9009b0&query=" +
            this.searchQuery
        );
      }
      if (this.searchQuery === "") {
        this.displayEmptySearch = true;
      } else {
        this.displayEmptySearch = false;
      }
      // else {
      //   this.$store.commit(
      //   "urlUpdate",
      //   "https://api.themoviedb.org/3/search/movie?api_key=0150f230986e887a5efff2e0af9009b0&query=" +
      //     this.searchQuery
      //   );
      // }

      this.$store.dispatch("topRated");
    },
  },
  created() {},
};
</script>

<style>
.red {
  color: red;
}
</style>
