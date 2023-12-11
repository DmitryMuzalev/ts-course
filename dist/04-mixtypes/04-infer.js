"use strict";
/*
Ключевое слово infer можно использовать только в условных типах.
infer может использоваться только с применением extends.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function fromPair(pair) {
    const [key, value] = pair;
    return {
        key: value,
    };
}
const myPair = ["myKey", "myValue"];
const myPair2 = ["myKey", "myValue"];
// /fromPair(myPair); //! Argument of type 'string[]' is not assignable to parameter of type '[string, string]'.
//_1
fromPair(myPair); // не рекомендуется
fromPair(myPair2);
const myPair3 = ["myKey", "myValue"];
fromPair(myPair3);
class Computer {
    constructor(brand) { }
}
let brand = "IMB"; //string
let dateArg; // string | number | Date
//infer - позволяет вытащить тип из существующей структуры
