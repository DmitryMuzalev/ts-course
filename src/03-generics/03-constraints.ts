/* 
Constraints - Ограничения 
*/

export function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength('abcdefg'); // 7
getLength([1, 2, 3, 4, 5, 6, 7]); // 7
getLength({ length: 12 }); // 12

//! error getLength(123);
//! error getLength(false);

const obj1 = { a: 1 };
const obj2 = { a: 1, length: 1 };

//! error getLength(obj1);
getLength(obj2); //1
