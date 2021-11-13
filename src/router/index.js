import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SingleMovie from "../components/SingleMovie.vue";
import Latest from "../components/Latest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/movie/:id",
    name: "SingleMovie",
    component: SingleMovie,
    props: true,
  },
  {
    path: "/latest",
    name: "Latest",
    component: Latest,
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
