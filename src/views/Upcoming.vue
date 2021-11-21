<template>
  <movies title="Upcoming Movies" :movies="movies"></movies>
  <movie-pages></movie-pages>
</template>

<script>
import Movies from "../components/Movies.vue";
import MoviePages from "../components/MoviePages.vue";

export default {
  name: "Upcoming",
  data() {
    return {
      view: "upcoming",
    };
  },
  components: {
    Movies,
    MoviePages,
  },
  created() {
    this.$store.dispatch("viewStatus", this.view);
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
};
</script>
