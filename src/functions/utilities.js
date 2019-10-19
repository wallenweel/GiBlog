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
 * getSearchSeries is a simple url search params tool
 */
export const getSearchSeries = () =>
  location.search
    .slice(1)
    .split("&")
    .map(a => a.split("="))
    .reduce((p, [k, v]) => ({ ...p, [k]: v || true }), {});

/**
 * isMobile is a simple checker for devices of phone and pad
 * @return {boolean}
 */
export const isMobile = () =>
  !!navigator.userAgent.match(/(android|iphone|ipad)/i);

/**
 * isBlank can check whether enable blank viewing mode
 */
export const isBlank = () => !!getSearchSeries()["blank"];
