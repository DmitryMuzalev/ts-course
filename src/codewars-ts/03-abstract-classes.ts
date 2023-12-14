/* 

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. 
Unlike an interface, an abstract class may contain implementation details for its members. The abstract 
keyword is used to define abstract classes as well as abstract methods within an abstract class.

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

*/

export abstract class Animal {
  protected constructor(public value: number) {}
  convertTo = (someone: Animal): number => this.value / someone.value;
}

export class Boa extends Animal {
  constructor() {
    super(38);
  }
}

export class Parrot extends Animal {
  constructor() {
    super(1);
  }
}

export class Monkey extends Animal {
  constructor() {
    super(38 / 5);
  }
}

const boa = new Boa();
const parrot = new Parrot();
const monkey = new Monkey();

console.log(boa.convertTo(parrot));
console.log(boa.convertTo(monkey));
