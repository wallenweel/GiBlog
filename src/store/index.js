import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from "./actions";
import mutations from "./mutations";

const state = {
  repo: null,
  username: null,
  password: null,
  token: null,

  theme: null,

  profile: {
    id: null,
    name: null,
    email: null,
    home: null,
    avatar: null,
    description: null,
    followers: null,
    following: null,
    updated: null
  },
  articles: null,
  tags: null,

  test: true
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
