<template>
  <div v-for="movie in movies" :key="movie.id">
    <div v-if="movie.id == id">
      <div class="single-content content container">
        <div class="details">
          <div class="xl:w-1/4 lg:w-2/4 w-full mt-4 flex flex-col">
            <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
          </div>
          <div class="lg:w-5/12 w-11/12 mt-10">
            <h1>{{ movie.title }}</h1>

            <div class="group">
              <div>
                <div class="content-group xl:mb-4">
                  <span class="material-icons"> event </span>
                  <h3>{{ movie.release_date }}</h3>
                </div>
                <div class="content-group">
                  <span class="material-icons"> play_arrow </span>
                  <h3>{{ movieDetails.runtime }} min</h3>
                </div>
              </div>
              <div>
                <div class="content-group xl:mb-4">
                  <span class="material-icons"> star_rate </span>
                  <h3>
                    {{ movie.vote_average }}
                    from
                    {{ movie.vote_count }} votes
                  </h3>
                </div>
                <div class="content-group">
                  <span class="material-icons"> movie_filter </span>
                  <div v-for="gen in movieDetails.genres" :key="gen">
                    <h3>{{ gen.name }}</h3>
                  </div>
                </div>
              </div>
            </div>

            <h2>{{ movieDetails.tagline }}</h2>

            <p>{{ movie.overview }}</p>
          </div>
        </div>
        <h2 class="text-center mb-10 lg:mt-20 underline">Casting</h2>
        <div class="casting-container" @wheel.prevent="wheel">
          <div class="cast" v-for="item in credits.cast" :key="item.id">
            <div class="profile" v-if="item.profile_path">
              <div class="names">
                <h3>
                  {{ item.original_name }}
                </h3>
                <h3>
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
    this.$store.dispatch("fetchMovies");

    fetch(this.movieImagesUrl)
      .then((response) => response.json())
      .then((data) => {
        this.movieDetails = data;
        console.log(this.movieDetails);
      })
      .catch((error) => {
        console.log(error.statusText);
      });

    fetch(this.creditsUrl)
      .then((response) => response.json())
      .then((data) => {
        this.credits = data;
      })
      .catch((error) => {
        console.log(error.statusText);
      });
  },
  updated() {
    this.$store.dispatch("fetchMovies");
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
    wheel() {
      const scrollContainer = document.querySelector(".casting-container");
      scrollContainer.addEventListener("wheel", (e) => {
        scrollContainer.scrollLeft += e.deltaY * -0.01;
      });
    },
  },
};
</script>
