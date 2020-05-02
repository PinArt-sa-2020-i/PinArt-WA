import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as constants from '@/store/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    image: '',
    username: null,
    firstName: null,
    lastName: null,
    token: null,
    id: null,

  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    [constants.SESSION_LOGIN]: ({ commit }, userInfo) => {
      commit(constants.SESSION_SET_PROPERTY, { username: userInfo.username });
      commit(constants.SESSION_SET_PROPERTY, { firstName: userInfo.firstName });
      commit(constants.SESSION_SET_PROPERTY, { lastName: userInfo.lastName });
      commit(constants.SESSION_SET_PROPERTY, { token: userInfo.token });
      commit(constants.SESSION_SET_PROPERTY, { id: userInfo.id });
      commit(constants.SESSION_SET_PROPERTY, { logged: true });
    },
    [constants.GET_IMAGE]: ({ commit }) => {
      axios
        .get('https://picsum.photos/id/0/info')
        .then((response) => response.data)
        .then((image) => commit(constants.SET_IMAGE, image.download_url));
    },
  },
  mutations: {
    // eslint-disable-next-line no-shadow
    [constants.SESSION_SET_PROPERTY]: (state, data) => {
      const [[property, value]] = Object.entries(data);
      state[property] = value;
    },
    [constants.SET_IMAGE]: (state, value) => {
      state.image = value;
    },
  },
  modules: {},
});
