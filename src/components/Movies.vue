<template>
  <div class="content">
    <h1>{{ title }}</h1>
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

  props: ["title", "movies"],
  components: {
    MoviePages,
  },

  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
  },
};
</script>
