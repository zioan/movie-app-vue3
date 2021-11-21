<template>
  <div class="tags">
    <ul>
      <li @click="updateTag(tag)" v-for="tag in tags" :key="tag.id">
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      // https://api.themoviedb.org/3/discover/movie?api_key=###&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=
    };
  },
  created() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        this.tags = data.genres;
      })
      .catch((error) => {
        console.log(error.statusText);
      });
  },
  methods: {
    updateTag(tag) {
      this.$store.commit("updateTagId", tag.id);
      this.$store.commit("updateTagName", tag.name);
      this.$store.dispatch("pageReset");
      this.$store.dispatch("tagView");
      this.$router.push({ path: "/search-by-tag" });
      this.$store.dispatch("fetchMovies");
    },
  },
};
</script>

<style></style>
