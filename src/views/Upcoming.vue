<template>
  <movies title="Top Popular Movies" :movies="movies"></movies>
</template>

<script>
import Movies from "../components/Movies.vue";

export default {
  name: "Upcoming",
  data() {
    return {
      view: "upcoming",
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
