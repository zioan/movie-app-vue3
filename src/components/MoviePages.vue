<template>
  <div class="pages-nav content">
    <button
      v-for="index in 5"
      :key="index"
      class="activePageBtn"
      :class="[pageActive === index ? 'active' : '']"
      @click="changePage(index)"
    >
      {{ index }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MoviePages",
  data() {
    return {
      page: "",
    };
  },

  methods: {
    changePage(value) {
      this.page = value;
      this.$store.dispatch("pageUpdate", this.page);
      this.$store.dispatch("fullPageUpdate");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  computed: {
    pageActive() {
      return this.$store.getters.page;
    },
  },
};
</script>
