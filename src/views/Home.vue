<template>
  <div class="home">
    <movies></movies>
    <button class="toTop" @click="scrollToTop">
      <span class="material-icons"> keyboard_double_arrow_up </span>
    </button>
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";

export default {
  name: "Home",
  components: {
    Movies,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
