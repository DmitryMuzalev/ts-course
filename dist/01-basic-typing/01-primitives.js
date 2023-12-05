"use strict";
//_number:
let x = 10;
//! x = ""  // error
//_BigInt:
//let bin = 12143n;
//_string:
let str = "string";
//_symbol:
let symb = Symbol("hey");
//! let all = symb + str;  // error
//_boolean:
let o = false;
//_nothing:
let u = undefined;
let n = null;
//_literal:
const a = 10;
const b = "hello";
//_universal:
let v = 1;
v = "string";
v = [];
v.toUpperCase(); // will not report an error
//_unknown:
let un = 2;
//! un.toUpperCase() error
if (typeof un === "string")
    un.toUpperCase();
