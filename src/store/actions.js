import GitHub from "github-api";
import { getInstall, getConfig } from "@/functions/config";
import debug from "@/functions/debug";
import {
  profileCleaner,
  issuesCleaner,
  labelsCleaner
} from "@/functions/github";

import { CONNECT_API_ERROR, NOT_FOUND_ANY_ISSUES } from "@/types";

// /* eslint-disable no-unused-vars */

export default {
  async init({ commit, dispatch }) {
    let error = null;
    let install = null;

    [error, install] = await getInstall();
    if (error !== null) return [error];

    commit("updateInstall", install);

    let configs = null;
    [error, configs] = await getConfig(install.config);
    if (error !== null) return [error];

    debug.info("Read Config: ", configs);

    commit("updateConfig", configs);

    [error] = await dispatch("firstFetching");
    if (error !== null) return [error];

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
  getMarkdown
};

async function genApi({ state }) {
  const { username, password, token } = state;

  let error = null;

  const api = new GitHub({ username, password, token });

  return [error, api];
}

async function getProfile({ commit, dispatch }) {
  const [, api] = await dispatch("genApi");
  const { status, data = [] } = await api.getUser().getProfile();
  // debug.log(data);

  if (status !== 200) return [CONNECT_API_ERROR];

  const profile = profileCleaner(data);
  // debug.log(profile);

  commit("updateProfile", profile);

  return [null];
}

async function getIssues({ state, commit, dispatch }) {
  const [, api] = await dispatch("genApi");
  const { username, repo } = state;
  const issues = api.getIssues(username, repo);
  // debug.log(issues);

  const issuesHelper = async () => {
    const { status, data = [] } = await issues.listIssues();

    if (status !== 200) return CONNECT_API_ERROR;
    if (!data.length) return NOT_FOUND_ANY_ISSUES;

    const articles = issuesCleaner(data);
    // debug.log(data, articles);

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

async function getMarkdown({ dispatch }, text = "") {
  if (!text) return ["text is blank"];

  const [, api] = await dispatch("genApi");
  const { status, data: html } = await api.getMarkdown().render({ text });
  // debug.log("html", html);

  if (status !== 200) return [CONNECT_API_ERROR];

  return [null, html];
}
