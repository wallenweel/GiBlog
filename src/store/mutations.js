export default {
  updateConfig(state, { theme, repos }) {
    state.theme = theme;
    state.currentRepo = repos[0];
  }
};
