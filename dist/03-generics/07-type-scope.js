"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplePairCreator = void 0;
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
const tuplePairWith1 = tuplePairCreator(1); // [number, U]
const val1 = tuplePairWith1(2); // [number, number]
const val2 = tuplePairWith1("2"); // [number, string]
const val3 = tuplePairWith1([1, 2, 3]); // [number, number[]]
