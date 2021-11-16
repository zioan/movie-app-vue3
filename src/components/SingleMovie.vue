<template>
  <div v-for="movie in movies" :key="movie.id">
    <div v-if="movie.id == id">
      <h1>{{ movie.title }}</h1>
      <div class="single-content content">
        <div class="md:flex gap-20 justify-center">
          <div class="w-2/6">
            <h3>Release date: {{ movie.release_date }}</h3>
            <h3>{{ movie.vote_average }} from {{ movie.vote_count }} votes</h3>
            <img
              class="mt-10"
              :src="imgPath(movie.poster_path)"
              :alt="movie.title"
            />
          </div>
          <div class="w-2/6 mt-20">
            <h2>{{ movieDetails.tagline }}</h2>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
        <h2 class="text-center m-14">Casting</h2>
        <div class="casting-container">
          <div class="cast" v-for="item in credits.cast" :key="item.id">
            <div class="profile" v-if="item.profile_path">
              <div class="names">
                <h3 class="text-sm">
                  {{ item.original_name }}
                </h3>
                <h3 class="text-sm">
                  <span class="italic font-normal">as</span>
                  {{ item.character }}
                </h3>
              </div>
              <img :src="imgCastingPath(item.profile_path)" :alt="item.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      movieDetails: [],
      movieImagesUrl: `https://api.themoviedb.org/3/movie/${this.id}?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US`,
      credits: [],
      creditsUrl: `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US`,
    };
  },
  created() {
    this.$store.dispatch("topRated");

    fetch(this.movieImagesUrl)
      .then((response) => response.json())
      .then((data) => {
        this.movieDetails = data;
        // console.log(this.movieDetails);
      })
      .catch((error) => {
        console.log(error.statusText);
      });

    fetch(this.creditsUrl)
      .then((response) => response.json())
      .then((data) => {
        this.credits = data;
        console.log(this.credits);
      })
      .catch((error) => {
        console.log(error.statusText);
      });
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
    imgCastingPath(path) {
      return "https://image.tmdb.org/t/p/w200" + path;
    },
  },
};
</script>
