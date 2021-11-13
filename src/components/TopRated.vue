<template>
  <div class="top-rated">
    <h1>Top Rated Movies Today</h1>
    <div class="card-container">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
        <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("topRated");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },

  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w400" + path;
    },
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 600px;
  border: 1px solid #333;
  margin: 1rem;
  padding: 1rem;
}
</style>
