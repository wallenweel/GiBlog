export default {
  updateInstall(state, { repo, config }) {
    Object.assign(state.install, { repo, config });
  },

  updateConfig(state, { base64_token, username, theme, repos }) {
    state.token = atob(base64_token);
    state.username = username;
    state.repo = repos[0];
    state.theme = theme;
  },

  updateProfile(state, profile) {
    Object.assign(state.profile, profile);
  },

  updateArticles(state, articles) {
    state.articles = articles;
  },

  updateTags(state, tags) {
    state.tags = tags;
  },

  updateComments(state, comments) {
    state.comments = comments;
  }
};
