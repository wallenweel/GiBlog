import GitHub from "github-api";
import { getConfig } from "@/functions/config";
import debug from "@/functions/debug";
import {
  profileCleaner,
  issuesCleaner,
  labelsCleaner
} from "@/functions/github";

import {
  CONNECT_API_ERROR,
  NOT_FOUND_ANY_ISSUES,
  BLANK_MARKDOWN_TEXT
} from "@/types";

// /* eslint-disable no-unused-vars */

export default {
  async init({ dispatch }) {
    let [error] = [null];

    [error] = await dispatch("getConfig");
    if (error !== null) return [error];

    // [error] = await dispatch("firstFetching");
    if (error !== null) return [error];

    return [error];
  },

  async getConfig({ commit }) {
    let [error, config, settings] = [null, null];

    [error, { config, settings }] = await getConfig();
    if (error !== null) return [error];

    commit("updateConfig", config);
    debug.log("Updated Config: ", config);

    commit("updateSettings", settings);
    debug.log("Updated Settings: ", settings);

    return [error];
  },

  async firstFetching({ dispatch }) {
    let error = null;

    [error] = await dispatch("getProfile");
    if (error !== null) return [error];

    [error] = await dispatch("getIssues");
    if (error !== null) return [error];

    return [error];
  },

  genApi,
  getProfile,
  getIssues,
  getMarkdown,
  switchArticle
};

async function genApi({ state }) {
  const { username, password, token } = state;
  const api = new GitHub({ username, password, token });

  return [null, api];
}

async function getProfile({ commit, dispatch }) {
  const [, api] = await dispatch("genApi");
  const { status, data = [] } = await api.getUser().getProfile();

  if (status !== 200) return [CONNECT_API_ERROR];

  const profile = profileCleaner(data);

  commit("updateProfile", profile);

  return [null];
}

async function getIssues({ state, commit, dispatch }) {
  const [, api] = await dispatch("genApi");
  const { username, repo } = state;
  const issues = api.getIssues(username, repo);

  const issuesHelper = async () => {
    const { status, data = [] } = await issues.listIssues();

    if (status !== 200) return CONNECT_API_ERROR;
    if (!data.length) return NOT_FOUND_ANY_ISSUES;

    const articles = issuesCleaner(data);

    commit("updateArticles", articles);
    commit("updateFocusedArticles");
    commit("updateArticle", articles[0]);
  };

  const labelsHelper = async () => {
    const { status, data = [] } = await issues.listLabels();

    if (status !== 200) return CONNECT_API_ERROR;
    if (!data.length) return NOT_FOUND_ANY_ISSUES;

    const tags = labelsCleaner(data, true);

    commit("updateTags", tags);
  };

  let error = null;

  error = (await issuesHelper()) || null;
  error = (await labelsHelper()) || null;

  return [error];
}

async function getMarkdown({ dispatch }, text = "") {
  if (!text) return [BLANK_MARKDOWN_TEXT];

  const [, api] = await dispatch("genApi");
  const { status, data: html } = await api.getMarkdown().render({ text });

  if (status !== 200) return [CONNECT_API_ERROR];

  return [null, html];
}

function switchArticle({ commit, state }, direction /** next|prev */) {
  const { article = {}, focusedArticles: ids = [] } = state;

  let error = null;

  const idx = ids.indexOf(article.id);

  if (!~idx) {
    error = "Current article is not existed.";
    debug.log(error);

    return [error];
  }

  const id = ids[idx + { next: 1, prev: -1 }[direction]];

  if (!id) {
    error = "Not found the wanted article.";
    debug.log(error, id);
    return [error];
  }

  commit("updateArticle", id);

  return [error];
}
