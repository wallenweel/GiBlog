export const fuse = (func = () => {}) => {
  try {
    return [null, func()];
  } catch (error) {
    return [error];
  }
};
