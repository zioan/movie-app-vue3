import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SingleMovie from "../components/SingleMovie.vue";
import Upcoming from "../views/Upcoming.vue";
import NowPlaying from "../views/NowPlaying.vue";
import Search from "../views/Search.vue";
import Genre from "../views/Genre.vue";

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
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: NowPlaying,
  },
  {
    path: "/search-by-tag",
    name: "Genre",
    component: Genre,
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
