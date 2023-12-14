/*  
    Type assertions have two forms. One is the “angle-bracket” syntax:
    The two samples are equivalent. Using one over the other is mostly a choice of preference;
      however, when using TypeScript with JSX, only as-style assertions are allowed. 
*/

//*_1:
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//*_2:
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    return (result as SuccessServerResult).resultObject;
  } else {
    return (result as ErrorServerResult).message;
  }
}
