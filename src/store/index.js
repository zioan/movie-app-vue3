import { createStore } from "vuex";

export default createStore({
  state: {
    searchQuery: "",
    movies: [],
    url: "",
    pageValue: 1,
  },
  mutations: {
    urlUpdate(state, payload) {
      state.url = payload;
    },
    pageUpdate(state, payload) {
      state.pageValue = payload;
    },
    searchQueryUpdate(state, payload) {
      state.searchQuery = payload;
    },
    topRatedMutation(state, movies) {
      state.movies = movies;
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
