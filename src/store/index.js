import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from "./actions";
import mutations from "./mutations";

const state = {
  // [{token,...}, {token,...}]
  config: null,

  // current config
  repo: null,
  username: null,
  password: null,
  token: null,

  // data
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
  focusedArticles: null,
  article: null,
  comments: null,
  tags: null,
  focusedTags: null,

  // settings
  theme: null
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
