import { fuse } from "./utilities";

export default async function getConfig() {
  const config = window.localStorage.getItem("__init_config");

  if (!config) return ["not found config", {}];

  return fuse(() => JSON.parse(config));
}

// export default async function getConfig() {
//   try {
//     const response = await fetch("/codnfig.json");
//     const config = await response.json();
//     return [null, config];
//   } catch (error) {
//     return [error, "fetch config failed."];
//   }
// }
