import * as types from '../mutation-types.js';

const state = {
  editedItem: {
    fullName: '',
    username: '',
    password: ''
  }
};

const mutations = {
  [types.SET_USER_EDITED_ITEM] (state, user) {
    state.editedItem = user;
  }
};

export default {
  state,
  mutations
};
