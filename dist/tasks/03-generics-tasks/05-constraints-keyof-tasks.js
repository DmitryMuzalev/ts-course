"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
const object1 = {
    firstKey: 1,
    secondKey: { a: '' },
};
const array1 = [1, 2, 3, 4, 5];
console.log(keys(object1));
console.log(keys(array1));
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
console.log(values(object1));
console.log(values(array1));
