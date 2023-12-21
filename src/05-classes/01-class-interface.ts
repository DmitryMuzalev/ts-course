/* 
Главная особенность интерфейсов связана с классами. Классы, которые реализуют интерфейсы, 
содержат внутри себя свойства и методы, указанные в реализуемом интерфейсе:

*/

interface ICar {
  go(): void; // если указать параметр, то его обязательно нужно указать и в классе
  go2(speed: number): void;
  maxSpeed?: number;
}

export class Car implements ICar {
  go() {
    console.log("Let us go");
  }
  go2(speed: number) {
    // нужно дублировать типы для параметров
    console.log("Let us go now" + speed);
  }
  stop() {
    console.log("Stopped"); // не будет ошибки при указании метода в интерфейсе
  }
}

const car = new Car(); // тип Car

//! car.maxSpeed = 200; error т.к не указан в классе
