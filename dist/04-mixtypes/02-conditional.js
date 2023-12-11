"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 16;
const isXNegative = x >= 0 ? "no" : "yes"; // "no"|"yes"
const exampleObject1 = {
    a: "str",
    b: "str2",
};
//! Error
//const exampleObject2: MyRecords<string> = {
//  a: 1,
//  b: 2,
//};
const exampleObject3 = {
    a: new Date(),
    b: new Date(),
};
