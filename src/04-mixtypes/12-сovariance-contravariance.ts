/* Ковариантность и контравариантность */

/* 
Если мы передадим возвращающую number функцию для колбека функции-сортировки, которая ожидает возврата -1 | 0 | 1, то получим ошибку Type 'number' is not assignable to type '0 | 1 | -1'.:
*/

type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1;
declare function sort(
  arr: Array<number>,
  callback: ComparatorCallback
): Array<number>;

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);

/*  приводим тип возвращаемого значения к -1 | 0 | 1 с помощью ключевого слова as. */
const comparator2 = (item1: number, item2: number) =>
  Math.sign(item1 - item2) as -1 | 0 | 1;
// (item1: number, item2: number) => number;

//!sort(arr, comparator); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
sort(arr, comparator2);

/* 
Когда мы передаем аргументы в функцию, то ожидаемые типы параметров должны быть более широкими, 
чем фактические. Такое поведение проверки типов называется контравариантностью.
*/

type Formatter = (val: string) => string;
const formatToConcrete: Formatter = (): 'test' => 'test';
//! const formatToNumber: Formatter = (val: '1') => val; // Error!

/* 
Чтобы код не упал с ошибкой, достаточно проверки на наличие полей или методов нужных типов. А чтобы получить гарантии во внешнем мире, нужно, чтобы переменная попадала под внешние ограничения. Для этого тип должен быть более узким или таким же.
*/
