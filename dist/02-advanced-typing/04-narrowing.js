"use strict";
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
/*
Выражение typeof padding === 'number' называется защитником или предохранителем типа (type guard).
А процесс приведения определенного типа к более конкретной версии с помощью защитников типа и присвоений
называется сужением типа (narrowing).
*/
//_Example1
function example1(x) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else if (typeof x === "number") {
        console.log(x.toFixed());
    }
    else {
        console.log(x);
    }
}
//_Example2
function example2(str) {
    if (Array.isArray(str)) {
        str.join(" ");
    }
    else {
        str === null || str === void 0 ? void 0 : str.toUpperCase();
    }
}
//_Example3
function example3(x) {
    if (x instanceof Date) {
        x.getDate();
    }
    else {
        x.concat(3);
    }
}
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
