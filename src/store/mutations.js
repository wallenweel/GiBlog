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

  updateArticle(state, article) {
    state.article = article;
  },

  updateTags(state, tags) {
    state.tags = tags;
  },

  addFocusedTag(state, tag) {
    const tags = state.focusedTags || [];
    const has = tags.filter(_tag => _tag.id === tag.id);

    if (has.length) return;

    state.focusedTags = [...tags, tag];
  },

  subFocusedTag(state, tag) {
    state.focusedTags = (state.focusedTags || []).filter(
      _tag => _tag.id !== tag.id
    );
  },

  updateComments(state, comments) {
    state.comments = comments;
  }
};
