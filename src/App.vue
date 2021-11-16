<template>
  <div class="bg-gray-700 py-7">
    <header-nav></header-nav>
    <search-movie></search-movie>
  </div>
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
