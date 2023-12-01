"use strict";
function printPosition(position) {
    console.log(`
   Position 
   x: ${position.x}
   y: ${position.y}
   `);
}
const obj = {
    x: '1',
    y: '2',
};
const obj2 = {
    x: '2',
    y: '3',
    z: 3,
};
printPosition(obj);
printPosition(obj2);
function printName(user) {
    var _a;
    console.log(`Hello, ${user.firstName.toUpperCase()} `);
    console.log(`Hello, ${(_a = user.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase()} `); // если свойство опциональное, то нужно проверять его наличие.
}
