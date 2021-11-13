<template>
  <div class="home">
    <movies></movies>
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";

export default {
  name: "Home",
  components: {
    Movies,
  },
};
</script>
