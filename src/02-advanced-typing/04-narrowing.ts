function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

/* 
Выражение typeof padding === 'number' называется защитником или предохранителем типа (type guard). 
А процесс приведения определенного типа к более конкретной версии с помощью защитников типа и присвоений 
называется сужением типа (narrowing).
*/

//_Example1
function example1(x?: number | string): void {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else if (typeof x === "number") {
    console.log(x.toFixed());
  } else {
    console.log(x);
  }
}

//_Example2
function example2(str: string | string[] | null): void {
  if (Array.isArray(str)) {
    str.join(" ");
  } else {
    str?.toUpperCase();
  }
}

//_Example3
function example3(x: number[] | Date): void {
  if (x instanceof Date) {
    x.getDate();
  } else {
    x.concat(3);
  }
}

//_Example4

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
