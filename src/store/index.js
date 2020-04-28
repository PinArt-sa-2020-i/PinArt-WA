import Vue from 'vue';
import Vuex from 'vuex';
import * as constants from '@/store/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
  },
  actions: {
    [constants.SESSION_LOGIN]: ({ commit }) => {
      commit(constants.SESSION_SET_LOGGED, true);
    },
  },
  mutations: {
    [constants.SESSION_SET_LOGGED]: (state, value) => {
      state.logged = value;
    },
  },
  modules: {
  },
});
