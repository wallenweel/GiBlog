import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import en_US from "./locales/en_US";
import zh_CN from "./locales/zh_CN";

const dateTimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }
  },
  "zh-cn": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      // weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  }
};

export default new VueI18n({
  locale: "zh-cn",
  fallbackLocale: "en-us",
  dateTimeFormats,
  messages: {
    "en-us": en_US,
    "zh-cn": zh_CN
  }
});
