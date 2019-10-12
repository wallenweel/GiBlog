export default {
  updateInstall(state, { repo, config }) {
    Object.assign(state.install, { repo, config });
  },

  updateConfig(state, configs) {
    state.configs = configs;

    const { base64_token, username, theme, repos } = configs[0];

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

  updateFocusedArticles(state) {
    const articles = state.articles || [];
    const focusedTags = state.focusedTags || [];

    if (!focusedTags.length) {
      state.focusedArticles = articles.map(({ id }) => id);
      return;
    }

    const focused = articles
      .filter(
        ({ tags = [] }) =>
          !!focusedTags.filter(id => !!tags.filter(tag => id === tag.id).length)
            .length
      )
      .map(({ id }) => id);

    state.focusedArticles = focused;
  },

  updateArticle(state, article) {
    state.article = article;
  },

  updateTags(state, tags) {
    state.tags = tags;
  },

  addFocusedTag(state, id) {
    const tags = state.focusedTags || [];

    if (tags.filter(_id => _id === id).length) return;

    state.focusedTags = [...tags, id];
  },

  subFocusedTag(state, id) {
    state.focusedTags = (state.focusedTags || []).filter(_id => _id !== id);
  },

  updateComments(state, comments) {
    state.comments = comments;
  }
};
