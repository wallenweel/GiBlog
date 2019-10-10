export const fuse = (func = () => {}, ...params) => {
  try {
    return [null, func(params)];
  } catch (error) {
    return [error];
  }
};
