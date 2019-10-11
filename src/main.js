import Vue from "vue";
import Moment from "vue-moment";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Moment);

store.dispatch("init");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
