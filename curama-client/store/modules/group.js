import * as types from '../mutation-types.js';

const state = {
  editedItem: {
    title: ''
  }
};

const mutations = {
  [types.SET_GROUP_EDITED_ITEM] (state, group) {
    state.editedItem = group;
  }
};

export default {
  state,
  mutations
};
