export default {
  updateConfig(state, { oauth_token, username, theme, repos }) {
    state.token = atob(oauth_token);
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
