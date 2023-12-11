//*1
function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => a + b;

const sum3 = function (a: number, b: number): number {
  return a + b;
};

// Для параметров функций обязательно нужно указывать тип.

//*2
function log(name: string, id?: number): void {
  console.log(`Name: ${name}, id: ${id || "anonym"}`);
}

/*
Тип void выводится автоматически, когда мы работаем с пустой функцией 
или если внутри функции нет инструкции return
Чтобы указать, что параметр является необязательным, после его имени нужно поставить знак вопроса ("?").
*/

//*3
function crash(): never {
  throw new Error("crash");
}

/* 
  "Never" - ложное утверждение в логике. Функция, которая ничего не возвращает, 
  возвращает значение void . Однако функция которая никогда ничего не возвращает 
  (или всегда выбрасывает ошибку), возвращает never .
*/

//*4
export function average(...args: number[]): number {
  const sum = args.reduce((a, b) => a + b);
  return sum / args.length;
}
