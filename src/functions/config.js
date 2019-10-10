import { fuse } from "./utilities";

export default function getConfig() {
  const config = window.localStorage.getItem("__init_config");

  if (!config) return ["not found config", {}];

  return fuse(JSON.parse, config);
}
