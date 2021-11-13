import { createStore } from "vuex";

// const urlTopRated = `https://api.themoviedb.org/3/movie/popular?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=1`;

export default createStore({
  state: {
    movies: [],
    tag: "popular",
    url: null,
    urlTopRated: `https://api.themoviedb.org/3/movie/popular?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=1`,
  },
  mutations: {
    topRatedMutation(state, movies) {
      state.movies = movies;
    },
    urlUpdate(state, payload) {
      state.url = payload;
    },
  },
  actions: {
    topRated({ commit }) {
      fetch(this.state.url)
        .then((response) => response.json())
        .then((data) => {
          commit("topRatedMutation", data.results);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {},
});
