//_1
type TypeFactory<T> = T;

type exampleType1 = TypeFactory<number>;
type exampleType2 = TypeFactory<string>;
type exampleType3 = TypeFactory<boolean>;

let exampleValue1: exampleType1 = 1;
let exampleValue2: exampleType2 = '1';
let exampleValue3: exampleType3 = true;

//_2
function toArray<T>(...args: T[]): T[] {
  return args;
}

toArray(1, 2, 3);
toArray('str1', 'str2', 'str3');
//! error: toArray(1, 'str2', 3);

//_3
function head(value: string): string;
function head<T>(value: T[]): T;
function head(value: any): any {
  return value[0];
}

const result1 = head([1, 2, 3, 4]);
console.log(result1); // 1

//_4
interface ModuleDate<T> {
  title: string;
  value: T; // number, [] , boolean
}

const obj1: ModuleDate<number> = {
  title: 'title',
  value: 12,
};

const obj2: ModuleDate<Array<number>> = {
  title: 'title',
  value: [1, 2, 3],
};

//_5
