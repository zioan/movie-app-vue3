<template>
  <movies title="Now Playing" :movies="movies"></movies>
</template>

<script>
import Movies from "../components/Movies.vue";
export default {
  name: "NowPlaying",
  data() {
    return {
      view: "nowPlaying",
    };
  },
  components: {
    Movies,
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
