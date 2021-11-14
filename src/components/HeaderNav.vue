<template>
  <div class="container flex justify-between mx-auto">
    <div class="p-4">
      <p class="p-4 text-lg border-8 w-max">The Movie DB API</p>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style></style>
