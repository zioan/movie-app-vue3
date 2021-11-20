<template>
  <div class="container m-auto p-4 flex flex-col items-center content-center">
    <h2 class="text-red-700 text-3xl pb-3" v-if="displayEmptySearch">
      Enter a mouvie name
    </h2>
    <div class="flex gap-4 items-center">
      <input
        class="
          border-2
          bg-transparent
          p-2
          md:w-96
          text-gray-100
          outline-none
          text-xl
        "
        v-model.trim="searchQuery"
        @keypress.enter="searchAction"
        type="text"
        placeholder="Search Movie"
      />
      <router-link
        :to="{
          name: 'Search',
        }"
      >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: "search",
      displayEmptySearch: false,
      searchQuery: "",
    };
  },

  methods: {
    searchAction() {
      this.$store.commit("searchQueryUpdate", this.searchQuery);
      this.$store.dispatch("viewStatus", this.view);

      if (this.searchQuery === "") {
        this.displayEmptySearch = true;
      } else {
        this.displayEmptySearch = false;
      }

      this.$store.dispatch("fetchMovies");
      this.$router.push({ name: "Search" });
      this.searchQuery = "";
    },
  },
  created() {},
};
</script>
