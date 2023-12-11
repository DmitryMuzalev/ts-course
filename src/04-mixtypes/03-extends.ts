type Answer_1 = 64 extends number ? true : false; // true
type Answer_2 = number extends 64 ? true : false; // false
type Answer_3 = string extends any ? true : false; // true
type Answer_4 = string[] extends any[] ? true : false; // true
type Answer_5 = never extends any[] ? true : false; // true
type Answer_6 = never extends any ? true : false; // true
type Answer_7 = any extends any ? true : false; // true

//  { new (...args: any[]): any } - newable мы можем получить то, к чему можем применить оператор new

type Answer_8 = Date extends { new (...args: any[]): any } ? true : false; // false т.к Date представляет собой interface Date, а у interface не может быть вызван с new
type Answer_9 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false; // true  т.к Date представляет собой DateConstructor, и он может быть вызван с new

type T2 = string extends "a" | "b" | "c" ? true : false; //false
type T3 = { getDay(): number } extends Date ? true : false; //false
type T4 = number | string extends string ? true : false; // false
