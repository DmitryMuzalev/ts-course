function append<T>(el: T, list: Array<T>): Array<T> {
  return list.concat(el);
}

const result2 = append(4, [1, 2, 3]); // [ 1, 2, 3, 4 ]
const result3 = append('d', ['a', 'b', 'c']); // [ 'a', 'b', 'c', 'd' ]

console.log(result2, result3);
