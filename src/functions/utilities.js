/**
 * fuse is designed to avoid function's risk
 * if throw error but no break
 * @param {function} func   try a function
 * @param {...any}   params any params
 * @return {array}          [error, result?]
 */
export const fuse = (func = () => {}, ...params) => {
  try {
    const result = func(params);
    return [null, result];
  } catch (error) {
    return [error];
  }
};

/**
 * isMobile is a simple checker for devices of phone and pad
 * @return {boolean}
 */
export const isMobile = () =>
  !!navigator.userAgent.match(/(android|iphone|ipad)/i);

/**
 * isBlank is checked does not render any data
 */
export const isBlank = () => !!location.search.match("blank");
