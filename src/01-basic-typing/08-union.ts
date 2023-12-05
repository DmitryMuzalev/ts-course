/* 

Объединение или союз ( Union ) - это мощный механизм, позволяющий создавать из множества существующих типов логическое условие, 
по которому данные могут принадлежать только к одному из указанных типов. 
Объединение указывается с помощью оператора прямой черты | , по обе стороны которой располагаются типы данных.

*/

type Status = "ok" | "loading" | "error";

const exampleStatus: Status = "loading";

const exampleArray: (number | string)[] = []; // нужно указывать скобки для union

function printId(id: string | number): void {
  typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id);
}

function welcome(user: [string, string] | string): void {
  Array.isArray(user) ? console.log(user.join(" ")) : console.log(user);
}
