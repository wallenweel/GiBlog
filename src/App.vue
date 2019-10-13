<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~normalize.css";
@import "~github-markdown-css";

@import "./styles/variables.scss";
@import "./styles/font.scss";
@import "./styles/ui.scss";
@import "./styles/media.scss";

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    text-decoration: none;
    color: var(--text-c-primary);
  }
}
</style>
