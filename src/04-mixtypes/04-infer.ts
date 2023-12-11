/* 
Ключевое слово infer можно использовать только в условных типах.
infer может использоваться только с применением extends.
*/

function fromPair(pair: [string, string]) {
  const [key, value] = pair;
  return {
    key: value,
  };
}

const myPair = ["myKey", "myValue"];
const myPair2: [string, string] = ["myKey", "myValue"];

// /fromPair(myPair); //! Argument of type 'string[]' is not assignable to parameter of type '[string, string]'.

//_1
fromPair(myPair as [string, string]); // не рекомендуется
fromPair(myPair2);

//_2
type FirsArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never; //infer - определяет тип переданной функции, определяет первый аргумент этой функции

const myPair3: FirsArg<typeof fromPair> = ["myKey", "myValue"];
fromPair(myPair3);

//_3
type ConstructorFirstArg<T> = T extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = "IMB"; //string
let dateArg: ConstructorFirstArg<typeof Date>; // string | number | Date

export {};

//infer - позволяет вытащить тип из существующей структуры
