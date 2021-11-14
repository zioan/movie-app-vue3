<template>
  <header-nav></header-nav>
  <search-movie></search-movie>
  <router-view />
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import SearchMovie from "./components/SearchMovie.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
    SearchMovie,
  },
};
</script>

<style>
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
