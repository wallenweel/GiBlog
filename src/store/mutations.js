export default {
  updateConfig(state, { username, theme, repos }) {
    state.theme = theme;
    state.repo = repos[0];
    state.username = username;
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
