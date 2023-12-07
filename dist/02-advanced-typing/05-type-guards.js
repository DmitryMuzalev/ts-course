"use strict";
/*
Защита типа (type guards) — техника TypeScript, используемая для получения информации о типе переменной, обычно в условном блоке.
Защитники типов — обычные функции, возвращающие логическое значение, принимающие тип и сообщающие TypeScript, можно ли его сузить до чего-то более конкретного.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = exports.isFish = void 0;
function isFish(pet) {
    return pet.swim !== undefined;
}
exports.isFish = isFish;
function move(animal) {
    if (isFish(animal)) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
exports.move = move;
/*

function isNull(value: any): value is null {
  return !value;
}

const empty = "";
const zero = 0;

if (isNull(zero)) {
  return zero; //!never
}

*/
