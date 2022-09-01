import Vuex from "vuex";
import user from "./modules/user";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user
    },
    state: {
     
    }
  });
};
export default createStore;