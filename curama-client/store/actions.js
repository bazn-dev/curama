import * as types from './mutation-types.js';

export const setUserEditedItem = function ({ commit }, user) {
  commit(types.SET_USER_EDITED_ITEM, user);
};

export const setGroupEditedItem = function ({ commit }, group) {
  commit(types.SET_GROUP_EDITED_ITEM, group);
};
