

const localStorageGet = (key) => {
  const get = window.localStorage.getItem(key);
  return get;
};
const localStorageSet = (key, value) => {
  window.localStorage.setItem(key, value);
};
