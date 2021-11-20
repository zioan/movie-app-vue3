<template>
  <movies title="Top Popular Movies" :movies="movies"></movies>
</template>

<script>
import Movies from "../components/Movies.vue";

export default {
  name: "Search",
  data() {
    return {
      view: "search",
    };
  },
  components: {
    Movies,
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w400" + path;
    },
  },
};
</script>

<style></style>
