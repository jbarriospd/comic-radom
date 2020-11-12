import { getComic, getRandomComic } from "../../api";

export default {
  namespaced: true,
  state: {
    info: null
  },
  mutations: {
    SET_INFO(state, payload) {
      state.info = payload;
    }
  },
  actions: {
    getToken({ commit }) {
      commit("loading/SET_LOADING", true, { root: true });

      let idComic = getRandomComic();

      getComic(idComic)
        .then(({ data }) => {
          console.log("data", data);
          commit("SET_INFO", data);
        })
        .catch(err => {
          commit("SET_INFO", null);
          console.log("Error Info: ", err);
        })
        .finally(() => {
          commit("loading/SET_LOADING", false, { root: true });
        });
    }
  }
};
