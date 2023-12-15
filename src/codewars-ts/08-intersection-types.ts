export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <T & U>{};

  for (let key in second) {
    if (first.hasOwnProperty(key)) {
      result[key] = (first as any)[key];
    }
  }

  return result;
}

const obj1 = { a: 1 };
const obj2 = { a: 2, b: 2 };

const intersection = intersect(obj1, obj2);

console.log(intersection);

const obj3 = { c: 3, d: 4 };

const intersection2 = intersect(obj2, obj3);

console.log(intersection2);
