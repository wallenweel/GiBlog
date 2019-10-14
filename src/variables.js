export const env = process.env.NODE_ENV;

export const isDebug = true || env === "development";

export const app = {
  name: "GiBlog Alpha"
};

export const theme = {
  color: {
    primary: "#8a2be2"
  }
};

export const custom = {
  path: "custom",

  get gist() {
    return {
      file: this.path + "/gist.ini",
      reg: /^(id|public|base64_token|config|settings) *= *(.*)/gim,
      filename: {
        config: this.config.filename,
        settings: this.settings.filename
      }
    };
  },
  get config() {
    const filename = "config.json";

    return {
      filename,
      file: this.path + "/" + filename,
      example: this.path + "/config.example.json"
    };
  },
  get settings() {
    const filename = "settings.json";

    return {
      filename,
      file: this.path + "/" + filename,
      example: this.path + "/settings.example.json"
    };
  }
};
