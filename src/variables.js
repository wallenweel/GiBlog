export const env = process.env.NODE_ENV;

export const isDebug = env === "development";

export const app = {
  name: "GiBlog Alpha"
};

export const theme = {
  color: {
    primary: "#8a2be2"
  }
};

export const config = {
  example: "./config.example.json",
  file: "./config.json"
};
