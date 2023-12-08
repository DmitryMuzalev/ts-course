const array = [1, 2, 3, 4, 5];

const arrayStrings: string[] = [];
const arrayStrings2: Array<string> = [];

//! arrayStrings2.push(3); будет ошибка
arrayStrings2.push("newString");

interface IPerson {
  name: string;
  age: number;
}

const persons: Array<IPerson> = [];
persons.push({ name: "Tom", age: 15 });
console.log(persons);

const arrayOfArray: string[][] = [];
arrayOfArray.push(["1", "2"]);

export function printArray(array: unknown[]) {
  array.forEach((el, index) => {
    console.log(el, index);
  });
}
