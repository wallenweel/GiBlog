export const fuse = (func = () => {}, remark = "") => {
  try {
    const result = func();
    return [null, result];
  } catch (error) {
    return [error, remark];
  }
};
