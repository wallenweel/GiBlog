<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~normalize.css";

:root {
  --column-left-w: 220px;
  --column-left-h: 100vh;
  --column-left-bg-c: #ffffff;
  --column-list-w: 220px;
  --column-list-h: 100vh;
  --column-list-bg-c: #575656;
  --column-comment-bg-c: #b4b4b4;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
