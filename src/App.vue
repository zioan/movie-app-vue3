<template>
  <h1>Movies</h1>
  <search-movie></search-movie>
  <home></home>
</template>

<script>
import Home from "./views/Home.vue";
import SearchMovie from "./components/SearchMovie.vue";
export default {
  name: "App",
  components: {
    SearchMovie,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
