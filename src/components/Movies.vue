<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <div class="layout">
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
                  <div>
                    <p v-if="movie.vote_average != 0">
                      IMDB:
                      <span class="material-icons text-base">
                        star_outline
                      </span>
                      {{ movie.vote_average }}
                    </p>
                    <p v-if="movie.vote_average != 0">
                      Votes:
                      {{ movie.vote_count }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <tag-selection></tag-selection>
    </div>
  </div>
</template>

<script>
import TagSelection from "./TagSelection.vue";
export default {
  name: "Movies",
  props: ["title", "movies"],
  components: {
    TagSelection,
  },
  methods: {
    imgPath(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
  },
};
</script>
