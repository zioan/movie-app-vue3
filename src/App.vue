<template>
  <div class="bg-gray-700 py-7">
    <header-nav></header-nav>
    <search-movie></search-movie>
  </div>
  <router-view />
  <button class="toTop" @click="scrollToTop">
    <span class="material-icons"> keyboard_double_arrow_up </span>
  </button>
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
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
