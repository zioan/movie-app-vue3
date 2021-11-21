<template>
  <div
    class="
      container
      flex
      md:flex-row md:justify-between
      flex-col
      items-center
      justify-center
      content-center
      mx-auto
    "
  >
    <div>
      <p
        @click.prevent="goHome"
        class="p-4 text-lg border-8 w-max md:mx-4 text-gray-100 cursor-pointer"
      >
        The Movie DB API
      </p>
    </div>
    <div id="nav" class="pt-8 pb-4 md:p-0">
      <router-link to="/" @click="resetPage">Popular</router-link> |
      <router-link
        :to="{
          name: 'NowPlaying',
        }"
        @click="resetPage"
        >Now Playing</router-link
      >
      |
      <router-link
        :to="{
          name: 'Upcoming',
        }"
        @click="resetPage"
        >Upcoming</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    resetPage() {
      this.$store.dispatch("pageReset");
    },
  },
};
</script>
