<template>
  <div class="content">
    <h1>Top Popular Movies</h1>
    <div class="card-container">
      <div v-for="movie in movies" :key="movie.id">
        <div v-if="movie.poster_path">
          <router-link
            :to="{
              name: 'SingleMovie',
              params: { id: movie.id },
            }"
          >
            <div class="card">
              <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
              <div class="card-inside">
                <h2>{{ movie.title }}</h2>
                <p v-if="movie.vote_average != 0">
                  IMDB:
                  <span class="material-icons text-lg"> star_outline </span>
                  {{ movie.vote_average }}
                </p>
                <p v-if="movie.vote_average != 0">
                  Votes:
                  {{ movie.vote_count }}
                </p>
                <p
                  class="
                    mt-6
                    overflow-ellipsis overflow-hidden
                    text-justify text-sm
                  "
                >
                  {{ movie.overview }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <movie-pages></movie-pages>
  </div>
</template>

<script>
import MoviePages from "./MoviePages.vue";
export default {
  name: "Movies",
  data() {
    return {
      url: `https://api.themoviedb.org/3/movie/popular?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=${this.$store.state.pageValue}`,
      pageValue: this.$store.state.pageValue,
    };
  },
  components: {
    MoviePages,
  },
  created() {
    this.$store.commit("urlUpdate", this.url);
    this.$store.dispatch("topRated");
    console.log(this.$store.state.movies);
  },
  mounted() {
    this.$store.commit("urlUpdate", this.url);
    this.$store.dispatch("topRated");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  watch: {
    pageValue: function (val) {
      this.$store.commit("urlUpdate", this.url);
      this.$store.dispatch("topRated");
      console.log(this.pageValue + "updated");
      console.log(val + "updated2");
    },
  },
  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
  },
};
</script>
