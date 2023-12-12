export {};
function sum(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

type FunctionResultType = ReturnType<typeof sum>; // string
type FunctionParamsType = Parameters<typeof sum>; // [arg:{a:number; b:string}]

class Car {
  constructor(brand: string, model: string) {}
}

type ConstructorParamsType = ConstructorParameters<typeof Car>; //  [brand: string, model: string]
