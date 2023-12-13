export class Circle {
  constructor(public radius: number) {}

  static pi: number = 3.14;
  private static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() {
    return Circle.calculateArea(this.radius);
  }
}

const circle_1 = new Circle(22);
//! don't work circle_1.pi
console.log(circle_1.area); //1519.76

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
  }
  log() {
    console.log(Circle.pi);
    //! don't work console.log(Circle.calculateArea);
  }
}
