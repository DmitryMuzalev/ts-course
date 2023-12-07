/* 
Защита типа (type guards) — техника TypeScript, используемая для получения информации о типе переменной, обычно в условном блоке. 
Защитники типов — обычные функции, возвращающие логическое значение, принимающие тип и сообщающие TypeScript, можно ли его сузить до чего-то более конкретного.
*/

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

export function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

export function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

/* 

function isNull(value: any): value is null {
  return !value;
}

const empty = "";
const zero = 0;

if (isNull(zero)) {
  return zero; //!never
} 

*/
