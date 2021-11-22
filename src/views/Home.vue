<template>
  <div class="home">
    <movies title="Top Popular Movies" :movies="movies"></movies>
    <movie-pages></movie-pages>
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
import MoviePages from "../components/MoviePages.vue";

export default {
  name: "Home",
  data() {
    return {
      view: "popular",
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
