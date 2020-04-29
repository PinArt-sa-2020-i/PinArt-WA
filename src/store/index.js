import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as constants from '@/store/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    image: '',
  },
  actions: {
    [constants.SESSION_LOGIN]: ({ commit }) => {
      commit(constants.SESSION_SET_LOGGED, true);
    },
    [constants.GET_IMAGE]: ({ commit }) => {
      axios
        .get('https://picsum.photos/id/0/info')
        .then((response) => response.data)
        .then((image) => commit(constants.SET_IMAGE, image.download_url));
    },
  },
  mutations: {
    [constants.SESSION_SET_LOGGED]: (state, value) => {
      state.logged = value;
    },
    [constants.SET_IMAGE]: (state, value) => {
      state.image = value;
    },
  },
  modules: {},
});
