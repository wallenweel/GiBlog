import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { getConfig } from "@/functions/config";
import { isMobile, isBlank } from "./functions/utilities";

import "./registerServiceWorker";

Vue.config.productionTip = false;

// ready
(async (html, language) => {
  // set user language
  html.setAttribute("lang", language);
  // checking mobile devices
  html.setAttribute("data-not-mobile", !isMobile());

  // listen routes
  router.beforeEach((to, from, next) => {
    // set current view type
    html.setAttribute("data-current-view", to.name);

    next();
  });

  // get all configs
  const [error, { config, settings }] = await getConfig();
  if (error !== null) return [error];

  // blank demo, no need init data
  if (!isBlank())
    // init store by configs
    await store.dispatch("init", {
      config,
      settings
    });
})(document.documentElement, navigator.language);

// render
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
