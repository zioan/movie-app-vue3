<template>
  <div class="top-rated">
    <h1>Search Movies</h1>
    <div class="card-container">
      <div v-for="movie in movies" :key="movie.id">
        <div v-if="movie.poster_path">
          <router-link
            :to="{
              name: 'SingleMovie',
              params: { id: movie.id },
              props: { movie: movie.title },
            }"
          >
            <div class="card">
              <h2>{{ movie.title }}</h2>
              <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
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

<style></style>
