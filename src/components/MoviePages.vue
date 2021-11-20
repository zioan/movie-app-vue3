<template>
  <div class="pages-nav">
    <button @click="changePage(1)">1</button>
    <button @click="changePage(2)">2</button>
    <button @click="changePage(3)">3</button>
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
      console.log(this.page);
      this.$store.commit("pageUpdate", this.page);
      console.log(this.$store.state.pageValue + "state");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid black;
  margin: 1rem;
  padding: 0.2rem;
}
</style>
