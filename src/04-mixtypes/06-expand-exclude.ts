export {};
//*_1
/* 
В результате разрешения условный тип Exclude<T, U> будет представлять разницу типа T относительно типа U. 
Параметры типа T и U могут быть представлены как единичным типом, так и множеством union.
*/

type T0 = Exclude<"a" | "b" | "c" | "d", "a" | "c">; // "b"|"d"
type T1 = Exclude<"a" | "b" | "c" | "d", "a" | "f">; // "b"|"c"|"d"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

type Status = "pending" | "success" | "error" | 401 | 200 | 504;
type NumericStatus = Exclude<Status, string>; // 401 | 200 | 504
type TextStatus = Exclude<Status, number>; // "pending" | "success" | "error"

//*_2
/* 
В результате разрешения условный тип Extract<T, U> будет представлять пересечение типа T относительно типа U. 
Оба параметра типа могут быть представлены как обычным типом, так и union.
*/

type T3 = Extract<"a" | "b" | "c" | "d", "a" | "c">; // "a"|"c"
type T4 = Extract<"a" | "b" | "c" | "d", "a" | "f">; // "a"
type T5 = Extract<string | number | (() => void), Function>; // () => void

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
  isOnline: boolean;
}

type PersonNames = Extract<
  keyof IPerson,
  "firstName" | "lastName" | "fullName"
>; // "firstName" | "lastName"

//*_3
/* 
Условный тип NonNullable<T> служит для исключения из типа признаков типов null и undefined. 
Единственный параметр типа может принадлежать как к обычному типу, так и множеству определяемого тип union.
*/

type T6 = NonNullable<string | null | (() => void)>; // string | () => void
type T7 = NonNullable<string | undefined | null>; // string

type Computer = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T8 = Extract<keyof Computer, string>; // "brand" | "year" | "isAvailable"

type Computer2 = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T9 = Exclude<keyof Computer2, string>; // never
