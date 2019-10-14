import GitHub from "github-api";
// import fetch from "fetch-retry";
import { custom } from "@/variables";
import { fuse } from "@/functions/utilities";
import debug from "@/functions/debug";

import {
  GET_CONFIG_FAILED,
  NOT_FOUND_CONFIG,
  GET_GIST_FILE_FAILED,
  GET_GIST_OPTION_FAILED,
  GET_GIST_CONFIG_FAILED,
  GET_GIST_SETTINGS_FAILED
} from "@/types";

export default getConfig;

// TODO: add network timeout / retry / status check / etc...
export async function getConfig() {
  const { gist, config: cfg, settings: sts, example: exp } = custom;

  let [error, gistFiles, customFiles] = [null, null, null];

  [error, gistFiles] = await getGistFiles(gist);

  if (error === null) {
    const [config, settings] = [
      gistFiles[gist.filename.config],
      gistFiles[gist.filename.settings]
    ];

    return [error, { config, settings }];
  }

  [error, customFiles] = await getCustomFiles(cfg, sts, exp);

  if (error === null) {
    const [config, settings] = [
      customFiles[cfg.filename],
      customFiles[sts.filename]
    ];

    return [error, { config, settings }];
  }

  return [error];
}

async function getCustomFiles(cfg = {}, sts = {}, exp = {}) {
  let [error, config, settings] = [null, null, null];

  const fetchFile = async file => {
    let error = null;

    try {
      const response = await fetch(file);
      const json = await response.json();

      return [error, json];
    } catch (error) {
      debug.error(`Get Config File: ${file} Failed.`, error);
      return [GET_CONFIG_FAILED, error];
    }
  };

  [error, config] = await fetchFile(cfg.file);
  if (error !== null) [error, config] = await fetchFile(exp.config);
  if (error !== null) return [error];

  [error, settings] = await fetchFile(sts.file);
  if (error !== null) [error, settings] = await fetchFile(exp.settings);
  if (error !== null) return [error];

  return [
    error,
    {
      [cfg.filename]: config,
      [sts.filename]: settings
    }
  ];
}

// TODO: agree use private gist,
// by token or username & password
async function getGistFiles({ file, reg, filename }) {
  const fetchGistOpt = async () => {
    try {
      const response = await fetch(file);
      const text = await response.text();
      const matched = text.match(reg);

      if (!matched) return [GET_GIST_OPTION_FAILED];

      let options = matched;

      options = options.map(opt => opt.split(/ *= */));
      options = options.reduce((p, [k, v]) => ({ ...p, [k]: v }), {});

      return [null, options];
    } catch (error) {
      debug.error(error);
      return [GET_GIST_FILE_FAILED, error];
    }
  };

  let error = null;
  let options = null;

  [error, options] = await fetchGistOpt();

  debug.log("Found Gist Options: ", options);

  if (error !== null) return [GET_GIST_OPTION_FAILED];

  const { id, public: public_status, base64_token, config, settings } = options;

  let github = null;

  if (public_status === "yes" && !base64_token) {
    github = new GitHub();
  } else {
    github = new GitHub({ token: atob(base64_token) });
  }

  const { status, data = {} } = await github.getGist(id).read();

  if (status !== 200) return [GET_CONFIG_FAILED, status];

  let files = null;

  files = Object.entries(data.files);

  if (!files.length) {
    debug.error("Not Found Gist File, Please Check: ", data.html_url);
    return [NOT_FOUND_CONFIG];
  }

  let [gistConfig, gistSettings] = [null, null];

  files = files.reduce((p, [n, v]) => ({ ...p, [n]: v }), {});

  const configContent = files[config || filename.config].content;
  [error, gistConfig] = fuse(JSON.parse, configContent);

  if (error !== null) return [GET_GIST_CONFIG_FAILED];

  files[filename.config] = gistConfig;

  const settingsContent = files[settings || filename.settings].content;
  [error, gistSettings] = fuse(JSON.parse, settingsContent);

  if (error !== null) return [GET_GIST_SETTINGS_FAILED];

  files[filename.settings] = gistSettings;

  debug.log("Found Gist Files", files);
  return [error, files];
}
