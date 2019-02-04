export const debounce = (callback, time = 200, interval) =>
  (...args) =>
    clearTimeout(interval, interval = setTimeout(() => callback(...args), time));