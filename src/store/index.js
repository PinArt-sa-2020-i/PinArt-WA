import Vue from 'vue';
import Vuex from 'vuex';
import * as constants from '@/store/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    username: null,
    firstName: null,
    lastName: null,
    token: null,
    id: null,
    selected_image: {},
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
      localStorage.setItem('pinart-token', userInfo.token);
      localStorage.setItem('pinart-userId', userInfo.id);
      localStorage.setItem('pinart-username', userInfo.username);
    },
    [constants.GET_IMAGE]: ({ commit }, image) => {
      commit(constants.SET_IMAGE, { selected_image: image });
    },
    [constants.RESTORE_SESSION]: ({ commit }) => {
      commit(constants.SESSION_SET_PROPERTY, { usermane: localStorage.getItem('pinart-username') });
      commit(constants.SESSION_SET_PROPERTY, { token: localStorage.getItem('pinart-token') });
      commit(constants.SESSION_SET_PROPERTY, { id: localStorage.getItem('pinart-userId') });
    },
  },
  mutations: {
    // eslint-disable-next-line no-shadow
    [constants.SESSION_SET_PROPERTY]: (state, data) => {
      const [[property, value]] = Object.entries(data);
      state[property] = value;
    },
    [constants.SET_IMAGE]: (state, data) => {
      state[this.selected_image] = data;
    },
  },
  getters: {
    [constants.SESSION_IS_LOGGED]: (state) => !!state.token,
  },
  modules: {},
});
