import Vue from "vue";
import isMobile from "is-mobile";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import "./registerServiceWorker";

Vue.config.productionTip = false;

(async () => {
  document.documentElement.setAttribute("lang", navigator.language);
  document.documentElement.setAttribute("data-not-mobile", !isMobile());

  router.beforeEach((to, from, next) => {
    document.documentElement.setAttribute("data-current-view", to.name);
    next();
  });

  // blank demo, no need init data
  if (!location.search.match("blank")) await store.dispatch("init");
})();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
