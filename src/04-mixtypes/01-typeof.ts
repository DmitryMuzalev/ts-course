import { average } from "../01-basic-typing/02-functions";

let exampleString = "Hello world!";
const exampleString2 = "Hello world!";

type X = typeof exampleString; // string
type Y = typeof exampleString2; // "Hello world!"

type Fn = typeof average; // (...args:number[]) => number

const getMax: Fn = (...args) => Math.max(...args);

getMax(1, 2, 3);
//! error getMax(1, "2", 3);

/* 
ReturnType — Создает тип, состоящий из типа, возвращаемого функцией Type.
Тип утилиты ReturnType очень полезен в ситуациях, когда вывод определенной функции должен быть принят другой функцией.
 В этом сценарии вы можете создать новый настраиваемый тип, которым ограничивается вывод функции.
*/

type ReturnFn = ReturnType<Fn>; // number

export {};
