export function createInstance<T, R extends any[]>(
  _class: new (...args: R) => T,
  ...args: R
): T {
  return new _class(...args);
}
