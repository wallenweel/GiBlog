import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import "./registerServiceWorker";

Vue.config.productionTip = false;

(async () => {
  await store.dispatch("init");

  const {
    history: { current }
  } = router;

  document.documentElement.setAttribute("lang", navigator.language);
  document.body.setAttribute("data-current-view", current.name);
})();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
