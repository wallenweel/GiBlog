import { config as configOpt } from "@/variables";

export default async function getConfig() {
  const { file } = configOpt;

  try {
    const response = await fetch(file);

    if (response.ok === false && ["404", "401"].includes(status))
      throw "Not Found Config File.";

    const config = await response.json();
    return [null, config];
  } catch (error) {
    return [error, {}];
  }
}
