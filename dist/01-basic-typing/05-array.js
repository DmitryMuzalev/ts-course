"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printArray = void 0;
const array = [1, 2, 3, 4, 5];
const arrayStrings = [];
const arrayStrings2 = [];
//! arrayStrings2.push(3); будет ошибка
arrayStrings2.push("newString");
const persons = [];
persons.push({ name: "Tom", age: 15 });
console.log(persons);
const arrayOfArray = [];
arrayOfArray.push(["1", "2"]);
function printArray(array) {
    array.forEach((el, index) => {
        console.log(el, index);
    });
}
exports.printArray = printArray;
