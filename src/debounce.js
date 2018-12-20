export const debouncedResize = (callback, time = 500, interval) =>
  (...args) =>
    clearTimeout(interval, interval = setTimeout(() => callback(...args), time));