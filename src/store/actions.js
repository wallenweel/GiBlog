import debug from "@/functions/debug";
import getConfig from "@/functions/config";

export default {
  async init({ commit }) {
    const [err, config] = await getConfig();
    debug.log(err, config);

    if (err !== null) return [err];

    commit("updateConfig", config);
  },
  getIssues() {}
};
