export const fuse = (func = () => {}, ...params) => {
  try {
    const result = func(params);
    return [null, result];
  } catch (error) {
    return [error];
  }
};
