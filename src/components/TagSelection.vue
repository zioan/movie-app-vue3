<template>
  <div class="tags">
    <ul>
      <li class="tag" v-for="tag in tags" :key="tag.id" @click="updateTag(tag)">
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
      this.$store.commit("viewReset");
      this.$store.dispatch("tagView");
      this.$router.push({ path: "/search-by-tag" });
    },
  },
};
</script>

<style></style>
