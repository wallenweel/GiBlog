import GitHub from "github-api";
import getConfig from "@/functions/config";
import debug from "@/functions/debug";
import {
  profileCleaner,
  issuesCleaner,
  labelsCleaner
} from "@/functions/github";

import { CONNECT_API_ERROR, NOT_FOUND_ANY_ISSUES } from "@/types";

export default {
  async init({ commit, dispatch }) {
    const [err, [config]] = await getConfig();

    if (err !== null) return [err];

    debug.info("Read Config: ", config);

    commit("updateConfig", config);

    dispatch("connectApi", config);
  },

  async connectApi({ dispatch }, { oauth_token: token, username, password }) {
    const github = new GitHub({ username, password, token });
    debug.log("Connected to GitHub: ", github);

    let error = null;

    [error] = await dispatch("getOwnerProfile", github);
    if (error !== null) return [error];

    [error] = await dispatch("getIssues", github);
    if (error !== null) return [error];

    return [error];
  },

  async getOwnerProfile({ commit }, api) {
    const { status, data = [] } = await api.getUser().getProfile();
    // debug.log(data);

    if (status !== 200) return [CONNECT_API_ERROR];

    const profile = profileCleaner(data);
    // debug.log(profile);

    commit("updateProfile", profile);

    return [null];
  },

  async getIssues({ commit, state }, api) {
    const { username, repo } = state;
    const issues = api.getIssues(username, repo);
    // debug.log(issues);

    const issuesHelper = async () => {
      const { status, data = [] } = await issues.listIssues();

      if (status !== 200) return CONNECT_API_ERROR;
      if (!data.length) return NOT_FOUND_ANY_ISSUES;

      const articles = issuesCleaner(data);
      // debug.log(articles);

      commit("updateArticles", articles);
    };

    const labelsHelper = async () => {
      const { status, data = [] } = await issues.listLabels();

      if (status !== 200) return CONNECT_API_ERROR;
      if (!data.length) return NOT_FOUND_ANY_ISSUES;

      const tags = labelsCleaner(data);
      // debug.log(tags);

      commit("updateTags", tags);
    };

    let error = null;

    error = (await issuesHelper()) || null;
    error = (await labelsHelper()) || null;

    return [error];
  }
};
