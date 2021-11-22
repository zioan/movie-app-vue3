<template>
  <div class="header py-7">
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
  data() {
    return {
      tagsView: false,
    };
  },
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

<style>
#app {
  background-color: #1f2937;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}

.header {
  background-color: #374151;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231f2937' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
