<template>
  <input v-model="searchData" type="text" placeholder="Search Movie" />
  <button @click="searchAction">Search</button>
  <p v-if="displayMovie">{{ searchData }}</p>
</template>

<script>
export default {
  data() {
    return {
      searchData: "",
      displayMovie: false,
    };
  },
  methods: {
    searchAction() {
      this.displayMovie = true;
    },
  },
};
</script>

<style></style>
