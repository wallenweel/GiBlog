import debug from "@/functions/debug";

export default {
  async init({ dispatch, commit }, { config, settings }) {
    let [error] = [null];

    commit("updateConfig", config);
    debug.log("Updated Config: ", config);
    commit("updateSettings", settings);
    debug.log("Updated Settings: ", settings);

    [error] = await dispatch("firstFetching");
    if (error !== null) return [error];

    return [error];
  },

  firstFetching,
  getProfile,
  getArticles,
  getTags,
  getMarkdownHTML,
  switchArticle
};

async function firstFetching({ dispatch }) {
  let error = null;

  [error] = await dispatch("getProfile");
  if (error !== null) return [error];

  [error] = await dispatch("getArticles");
  if (error !== null) return [error];

  [error] = await dispatch("getTags");
  if (error !== null) return [error];

  return [error];
}

async function getProfile({ getters, commit }) {
  const [error, profile] = await getters.api("getProfile");

  if (error !== null) return [error];

  commit("updateProfile", profile);

  return [error];
}

async function getArticles({ state, getters, commit }) {
  const { username, repo } = state;
  const [error, articles] = await getters.api("getArticles", {
    username,
    repo
  });

  if (error !== null) return [error];

  commit("updateArticles", articles);
  commit("updateFocusedArticles");
  commit("updateArticle", articles[0]);

  return [error];
}

async function getTags({ state, getters, commit }) {
  const { username, repo } = state;
  const [error, tags] = await getters.api("getTags", {
    username,
    repo
  });

  if (error !== null) return [error];

  commit("updateTags", tags);

  return [error];
}

async function getMarkdownHTML({ getters }, text = "") {
  const [error, html] = await getters.api("getMarkdownHTML", text);
  return [error, html];
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
