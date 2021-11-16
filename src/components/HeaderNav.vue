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
      <p class="p-4 text-lg border-8 w-max md:mx-4 text-gray-100">
        The Movie DB API
      </p>
    </div>
    <div id="nav" class="pt-8 pb-4 md:p-0">
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
