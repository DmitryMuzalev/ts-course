const x = 16;
const isXNegative = x >= 0 ? "no" : "yes"; // "no"|"yes"

interface StringRecords {
  [key: string]: string;
}

interface DateRecords {
  [key: string]: Date;
}

type MyRecords<T> = T extends string ? StringRecords : DateRecords;

const exampleObject1: MyRecords<string> = {
  a: "str",
  b: "str2",
};

//! Error
//const exampleObject2: MyRecords<string> = {
//  a: 1,
//  b: 2,
//};

const exampleObject3: MyRecords<number> = {
  a: new Date(),
  b: new Date(),
};

export {};
