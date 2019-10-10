import getConfig from "@/functions/config";

export default {
  async init({ commit }) {
    const [err, config] = await getConfig();

    if (err !== null) return [err];

    commit("updateConfig", config);
  },
  getIssues() {}
};
