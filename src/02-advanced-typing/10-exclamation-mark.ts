/* 

Оператор Not-Null Not-Undefined обозначается при помощи восклицательного знака ( ! ). При обращения к полям и свойствам, оператор Not-Null 
Not-Undefined указывается между ссылкой на потенциально опасный объект и оператором точка ( . ) .

!Не очень приветствуется в использовании 

*/

let word: string | null = null;
const num = 12;

if (num > 5) {
  word = "abc";
}

console.log(word!.toUpperCase()); // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть

function printName(name?: string) {
  const fullName: string = name!; // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
}

interface IPerson {
  name: string;
  age: number;
  sex: "female" | "male";
}

function printName2(person?: IPerson) {
  console.log(person?.age);
  // или
  console.log(person!.age); // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
}

const people: IPerson[] = [
  { name: "Tom", age: 12, sex: "male" },
  { name: "Tim", age: 15, sex: "male" },
  { name: "Any", age: 13, sex: "female" },
  { name: "Tony", age: 11, sex: "female" },
];

const femalePeople = people.find((p) => p.sex === "female")!; // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
