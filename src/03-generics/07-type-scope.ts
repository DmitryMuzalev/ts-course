export function tuplePairCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}

const tuplePairWith1 = tuplePairCreator(1); // [number, U]

const val1 = tuplePairWith1(2); // [number, number]
const val2 = tuplePairWith1("2"); // [number, string]
const val3 = tuplePairWith1([1, 2, 3]); // [number, number[]]
