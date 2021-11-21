<template>
  <movies :title="gen" :movies="movies"></movies>
  <movie-pages></movie-pages>
</template>

<script>
import Movies from "../components/Movies.vue";
import MoviePages from "../components/MoviePages.vue";

export default {
  name: "Genre",
  components: {
    Movies,
    MoviePages,
  },
  // created() {
  //   this.$store.dispatch("tagView");
  // },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    gen() {
      return this.$store.getters.gen;
    },
  },
};
</script>

<style></style>
