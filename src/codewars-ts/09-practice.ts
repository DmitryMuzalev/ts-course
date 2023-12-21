type MyMap<T, U> = {
  values: Array<T | U>;
  set(key: T, value: U): void;
  get(value: T): U | undefined;
};

export default MyMap;
