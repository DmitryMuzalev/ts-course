export function keys<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

const object1 = {
  firstKey: 1,
  secondKey: { a: '' },
};

const array1 = [1, 2, 3, 4, 5];

console.log(keys(object1));
console.log(keys(array1));

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

console.log(values(object1));
console.log(values(array1));
