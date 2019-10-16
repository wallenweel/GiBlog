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

  const {
    history: { current }
  } = router;

  document.body.setAttribute("data-current-view", current.name);

  await store.dispatch("init");
})();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
