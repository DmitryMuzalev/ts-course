export {};
class Rectangle {
  constructor(public width: number, public height: number) {}
  get area() {
    return this.width * this.height;
  }
}

const r1 = new Rectangle(15, 19);
console.log(r1.area); //285

class Car {
  constructor(public color: string, private _maxSpeed: number) {}
  get maxSpeed(): number {
    return this._maxSpeed;
  }
  set maxSpeed(speed: number) {
    if (speed > 0) {
      this._maxSpeed = speed;
    }
  }
}

const car1 = new Car("red", 220);

car1.maxSpeed = 550;

console.log(car1.maxSpeed); // 550

car1.maxSpeed = 0;

console.log(car1.maxSpeed); // 550
