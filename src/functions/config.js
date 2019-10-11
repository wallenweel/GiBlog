import { config as configOpt } from "@/variables";
import { NOT_FOUND_CONFIG } from "@/types";
import debug from "@/functions/debug";

export default async function getConfig() {
  const { file } = configOpt;

  try {
    const response = await fetch(file);

    if (response.ok === false && ["404", "401"].includes(status))
      throw NOT_FOUND_CONFIG;

    const config = await response.json();

    return [null, config];
  } catch (error) {
    debug.err(error);

    return [NOT_FOUND_CONFIG];
  }
}
