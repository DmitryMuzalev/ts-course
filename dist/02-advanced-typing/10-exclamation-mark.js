"use strict";
/*

Оператор Not-Null Not-Undefined обозначается при помощи восклицательного знака ( ! ). При обращения к полям и свойствам, оператор Not-Null
Not-Undefined указывается между ссылкой на потенциально опасный объект и оператором точка ( . ) .

!Не очень приветствуется в использовании

*/
let word = null;
const num = 12;
if (num > 5) {
    word = "abc";
}
console.log(word.toUpperCase()); // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
function printName(name) {
    const fullName = name; // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
}
function printName2(person) {
    console.log(person === null || person === void 0 ? void 0 : person.age);
    // или
    console.log(person.age); // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
}
const people = [
    { name: "Tom", age: 12, sex: "male" },
    { name: "Tim", age: 15, sex: "male" },
    { name: "Any", age: 13, sex: "female" },
    { name: "Tony", age: 11, sex: "female" },
];
const femalePeople = people.find((p) => p.sex === "female"); // "!" позволяет указать, что переменная, котора может быть null или undefined не является таковой, т.е значение есть
