<template>
  <div v-for="movie in movies" :key="movie.id">
    <div v-if="movie.id == id">
      <div class="single-content content">
        <h1 class="underline">{{ movie.title }}</h1>
        <div class="details">
          <div class="lg:w-1/4 w-11/12 mt-10 flex flex-col items-center">
            <img :src="imgPath(movie.poster_path)" :alt="movie.title" />
          </div>
          <div class="lg:w-5/12 w-11/12 mt-10 self-center">
            <h3>Release date: {{ movie.release_date }}</h3>
            <h3>
              <span class="material-icons text-lg"> star_outline </span>
              {{ movie.vote_average }}
              from
              {{ movie.vote_count }} votes
            </h3>
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
    this.$store.dispatch("topRated");

    fetch(this.movieImagesUrl)
      .then((response) => response.json())
      .then((data) => {
        this.movieDetails = data;
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
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w300" + path;
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
