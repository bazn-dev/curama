import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import group from './modules/group';
import * as actions from './actions.js';
import * as getters from './getters.js';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
    group
  }
});

export default store;
