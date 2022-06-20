export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
export const simpleMemoize = fn => {
  let lastArg;
  let lastResult;
  return arg => {
    if (arg !== lastArg) {
      lastArg = arg;
      lastResult = fn(arg);
    }
    return lastResult;
  };
};


export const formatPrecio = value => {
  if (!value) return value;
  const onlyNumbers = value.replace(/[^\d]/g, '');
  const withComma = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${withComma}`;
}

export const parsePrecio = value => {
  return value.replace(/[^\d]/g, '');
}