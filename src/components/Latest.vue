<template>
  <h1>latest</h1>
  <div class="top-rated">
    <h1>Top Popular Movies</h1>
    <div class="card-container">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <router-link
          :to="{
            name: 'SingleMovie',
            params: { id: movie.id },
            props: { movie: movie.title },
          }"
        >
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.id }}</p>
          <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Latest",
  data() {
    return {
      url: "https://api.themoviedb.org/3/movie/latest?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US",
    };
  },
  created() {
    this.$store.commit("urlUpdate", this.url);
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
