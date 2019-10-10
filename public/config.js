/**
 * Init Blog's Configuration
 * must: "oauth_token"/"username"/"repos"
 */
((config, reset = false) => {
  if (reset) window.localStorage.removeItem("__init_config");
  if (window.localStorage.getItem("__init_config")) return;
  window.localStorage.setItem("__init_config", JSON.stringify(config));
})({
  // base info
  title: "GiBlog V1",
  caption: "A Blog base on Github Issues.",
  author: "wallen",
  email: "wallen_weel@outlook.com",

  // styles
  theme: "Light",

  // get from: Github -> Settings -> Developer settings
  oauth_token: "7b46eb9348b4785ea59a2878ff906cf48ab101ca",

  // repo's user
  username: "wallenweel",

  // issues's repo (now only one supported)
  repos: ["notes"]
});
