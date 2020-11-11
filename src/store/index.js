import Vue from "vue";
import Vuex from "vuex";

import loading from "./modules/loading";
import error from "./modules/error";
import info from "./modules/info";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    error,
    info
  }
});
