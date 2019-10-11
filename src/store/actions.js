import debug from "@/functions/debug";
import getConfig from "@/functions/config";

export default {
  async init({ commit }) {
    const [err, config] = await getConfig();

    if (err !== null) return [err];

    debug.info("Read Config: ", config);

    commit("updateConfig", config);
  },
  getIssues() {}
};
