import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SingleMovie from "../components/SingleMovie.vue";
import Upcoming from "../components/Upcoming.vue";
import NowPlaying from "../components/NowPlaying.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/movie/:id",
    name: "SingleMovie",
    component: SingleMovie,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: Upcoming,
    // props: true,
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: NowPlaying,
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
