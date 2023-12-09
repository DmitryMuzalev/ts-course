"use strict";
let exampleValue1 = 1;
let exampleValue2 = '1';
let exampleValue3 = true;
//_2
function toArray(...args) {
    return args;
}
toArray(1, 2, 3);
toArray('str1', 'str2', 'str3');
function head(value) {
    return value[0];
}
const result1 = head([1, 2, 3, 4]);
console.log(result1); // 1
const obj1 = {
    title: 'title',
    value: 12,
};
const obj2 = {
    title: 'title',
    value: [1, 2, 3],
};
//_5
