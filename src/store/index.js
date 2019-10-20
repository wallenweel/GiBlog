import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import github from "@/apis/github";

import actions from "./actions";
import mutations from "./mutations";

const state = {
  // config
  ...{
    // [{token,...}, {token,...}]
    config: null,

    // current config
    title: null,
    description: null,
    owner: null,
    email: null,
    theme: null,

    // current repo
    repo: null,
    repos: null,
    username: null,
    password: null,
    token: null
  },

  // settings
  ...{
    // the repo of the blog to be installed
    mounted: null,
    // can be overwrited by config
    theme: null
  },

  // data
  ...{
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
    focusedTags: null
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    api(state) {
      const { api = "github", username, password, token } = state;
      return { github }[api]({ username, password, token });
    }
  }
});
