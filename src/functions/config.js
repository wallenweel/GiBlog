import GitHub from "github-api";
import fetch from "fetch-retry";
import { install } from "@/variables";
import { fuse } from "@/functions/utilities";
import debug from "@/functions/debug";

import {
  GET_INSTALL_FILE_FAILED,
  GET_CONFIG_FAILED,
  NOT_FOUND_CONFIG
} from "@/types";

export default getConfig;

export async function getInstall() {
  try {
    const response = await fetch(install.file);
    const json = await response.json();
    return [null, json];
  } catch (error) {
    return [GET_INSTALL_FILE_FAILED, error];
  }
}

export async function getConfig({ file, gist }) {
  if (gist) return await getConfigGist(gist);
  if (file) return await getConfigFile(file);

  return [GET_CONFIG_FAILED];
}

async function getConfigFile(file) {
  try {
    const response = await fetch(file, {
      retries: 3,
      retryDelay: 1000,
      retryOn(attempt, error, response) {
        if (error !== null || response.status >= 400) {
          debug.warn(`retrying, attempt number ${attempt + 1}`);
          return true;
        }
      }
    });

    const json = await response.json();
    return [null, json];
  } catch (error) {
    debug.err(error);
    return [GET_CONFIG_FAILED, error];
  }
}

async function getConfigGist(id) {
  const github = new GitHub();
  const { status, data: gist } = await github.getGist(id).read();

  if (status !== 200) return [GET_CONFIG_FAILED, status];

  const files = Object.values(gist.files);

  if (!files.length) {
    debug.err("Not Found Gist Config, Please Check: ", gist.html_url);
    return [NOT_FOUND_CONFIG];
  }

  const { content } = files[0] || {};

  return fuse(JSON.parse, content);
}
