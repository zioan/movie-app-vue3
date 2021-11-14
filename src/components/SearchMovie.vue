<template>
  <div
    class="
      container
      m-auto
      bg-gray-500
      p-4
      flex flex-col
      items-center
      content-center
    "
  >
    <h2 class="text-red-700 text-3xl pb-3" v-if="displayEmptySearch">
      Enter a mouvie name
    </h2>
    <div class="flex gap-4 items-center">
      <input
        class="
          border-2
          bg-transparent
          p-2
          w-10/12
          text-gray-100
          outline-none
          text-xl
        "
        v-model.trim.lazy="searchQuery"
        type="text"
        placeholder="Search Movie"
      />
      <router-link
        :to="{
          name: 'Search',
        }"
      >
        <button class="" @click="searchAction">
          <span class="material-icons"> search </span>
        </button>
      </router-link>
    </div>
  </div>
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
