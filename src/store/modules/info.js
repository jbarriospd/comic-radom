import { getComic } from "../../api";

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
    // Creamos la función getToken, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
    getToken({ commit }) {
      commit("loading/SET_LOADING", true, { root: true });
      // Pasos:
      //  1 - Hacer llamada HTTP para obtener el token
      //  2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
      //  3 - Si hay errror, limpiar el token de 'accessToken', mostrar log del error

      // Paso 1
      getComic()
        .then(({ data }) => {
          console.log("data", data);
          // Paso 2: Guardamos el valor del token llamando a nuestra mutación
          commit("SET_INFO", data.info);
        })
        .catch(err => {
          // Paso 3: En caso de error limpiamos el token
          commit("SET_INFO", null);
          console.log("Error Info: ", err);
        })
        .finally(() => {
          commit("loading/SET_LOADING", false, { root: true });
        });
    }
  }
};
