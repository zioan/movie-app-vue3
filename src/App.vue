<template>
  <div id="nav">
    <router-link to="/">Popular</router-link> |
    <router-link
      :to="{
        name: 'Upcoming',
      }"
      >Upcoming</router-link
    >
    |
    <router-link
      :to="{
        name: 'NowPlaying',
      }"
      >Now Playing</router-link
    >
  </div>
  <search-movie></search-movie>
  <router-view />
</template>

<script>
import SearchMovie from "./components/SearchMovie.vue";
export default {
  name: "App",
  components: {
    SearchMovie,
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
  box-sizing: border-box;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
