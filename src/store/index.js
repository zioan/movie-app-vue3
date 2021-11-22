import { createStore } from "vuex";

export default createStore({
  state: {
    searchQuery: "",
    movies: [],
    url: "",
    view: "",
    pageNumber: "" || 1,
    tagId: "",
    tagName: "",
    tagUrl: "",
  },
  mutations: {
    searchQueryUpdate(state, payload) {
      state.searchQuery = payload;
    },
    updateTagId(state, payload) {
      state.tagId = payload;
    },
    updateTagName(state, payload) {
      state.tagName = payload;
    },
    fetchMovies(state, payload) {
      state.movies = payload;
    },
    viewReset(state) {
      state.view = "";
    },
    viewChange(state, payload) {
      state.view = payload;
    },
    pageUpdate(state, payload) {
      state.pageNumber = payload;
    },
    pageReset(state) {
      state.pageNumber = 1;
    },
    urlChange(state) {
      if (state.view === "popular") {
        state.url = `https://api.themoviedb.org/3/movie/popular?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=${state.pageNumber}`;
      }
      if (state.view === "nowPlaying") {
        state.url = `https://api.themoviedb.org/3/movie/now_playing?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=${state.pageNumber}`;
      }
      if (state.view === "upcoming") {
        state.url = `https://api.themoviedb.org/3/movie/upcoming?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&page=${state.pageNumber}`;
      }
      if (state.view === "search") {
        state.url = `https://api.themoviedb.org/3/search/movie?api_key=0150f230986e887a5efff2e0af9009b0&query=${state.searchQuery}`;
      }
    },
    updateTagUrl(state) {
      state.url = `https://api.themoviedb.org/3/discover/movie?api_key=0150f230986e887a5efff2e0af9009b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${state.pageNumber}&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${state.tagId}`;
    },
  },
  actions: {
    viewStatus(context, payload) {
      context.commit("viewChange", payload);
      context.commit("urlChange");
      context.dispatch("fetchMovies");
    },
    tagView(context) {
      context.commit("updateTagUrl");
      // context.commit("pageUpdate", payload);
      context.dispatch("fetchMovies");
    },
    pageReset(context) {
      context.commit("pageReset");
    },
    pageUpdate(context, payload) {
      context.commit("pageUpdate", payload);
    },
    fullPageUpdate(context) {
      context.commit("urlChange");
      context.dispatch("fetchMovies");
      context.commit("fetchMovies");
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
    page(state) {
      return state.pageNumber;
    },
    gen(state) {
      return state.tagName;
    },
  },
});
