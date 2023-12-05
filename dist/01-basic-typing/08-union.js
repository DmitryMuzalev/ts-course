"use strict";
/*

Объединение или союз ( Union ) - это мощный механизм, позволяющий создавать из множества существующих типов логическое условие,
по которому данные могут принадлежать только к одному из указанных типов.
Объединение указывается с помощью оператора прямой черты | , по обе стороны которой располагаются типы данных.

*/
const exampleStatus = "loading";
const exampleArray = []; // нужно указывать скобки для union
function printId(id) {
    typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id);
}
function welcome(user) {
    Array.isArray(user) ? console.log(user.join(" ")) : console.log(user);
}
