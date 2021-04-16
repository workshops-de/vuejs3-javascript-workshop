import { getBooks } from "@/api/books";

export default {
  state: {
    books: [],
  },
  mutations: {
    UPDATE_BOOKS(state, payload) {
      state.books = payload.books;
    },
  },
  actions: {
    SET_BOOKS({ commit }, payload) {
      commit("UPDATE_BOOKS", payload);
    },
    async GET_BOOKS({ commit }) {
      const books = await getBooks();
      commit("UPDATE_BOOKS", {
        books,
      });
    },
  },
  namespaced: true,
};
