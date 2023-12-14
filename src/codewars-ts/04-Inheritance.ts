declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

class Animal implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public legs: number,
    public species: string,
    public status: string
  ) {}
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(
    public name: string,
    public age: number,
    public status: string,
    public master: string
  ) {
    super(name, age, 4, "dog", status);
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

export { Animal, Cat, Dog, Shark };
