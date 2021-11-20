import { createStore } from "vuex";

export default createStore({
  state: {
    searchQuery: "",
    movies: [],
    url: "",
    view: "",
  },
  mutations: {
    searchQueryUpdate(state, payload) {
      state.searchQuery = payload;
    },
    fetchMovies(state, movies) {
      state.movies = movies;
    },
    viewChange(state, payload) {
      state.view = payload;
      if (state.view === "popular") {
        state.url =
          "https://api.themoviedb.org/3/movie/popular?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=1";
      }
      if (state.view === "nowPlaying") {
        state.url =
          "https://api.themoviedb.org/3/movie/now_playing?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=2";
      }
      if (state.view === "upcoming") {
        state.url =
          "https://api.themoviedb.org/3/movie/upcoming?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=3";
      }
      if (state.view === "search") {
        state.url = `https://api.themoviedb.org/3/search/movie?api_key=0150f230986e887a5efff2e0af9009b0&query=${state.searchQuery}`;
        console.log("search page");
      }
    },
  },
  actions: {
    viewStatus(context, payload) {
      context.commit("viewChange", payload);
      context.dispatch("fetchMovies");
    },
    fetchMovies(context) {
      fetch(this.state.url)
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchMovies", data.results);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {},
  getters: {
    movies(state) {
      return state.movies;
    },
  },
});
