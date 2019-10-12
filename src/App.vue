<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~normalize.css";
@import "~github-markdown-css";

:root {
  --column-left-w: 220px;
  --column-left-h: 100vh;
  --column-left-bg-c: #ffffff;
  --column-list-w: 280px;
  --column-list-h: 100vh;
  --column-list-bg-c: #edf2f3;
  --column-comment-w: 360px;
  --column-comment-h: 100vh;
  --column-comment-bg-c: #ffffff;
  --articles-item-bg-c: #ffffff;
  --article-header-bg-c: #edf2f3;
  --text-c-primary: #6f4521;
  --text-c-light: #858585;
  --text-c-dark: #5c5c5c;
  --text-c-darker: #353535;
  --text-info-c-light: #777777;
  --border-c-lighter: #c2c2c2;
  --tag-text-c: #fafafa;
  --tag-none-bg-c: #c5c5c5;
}

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
