export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}

const temp0 = Temperature.fromFahrenheit(0);
console.log(temp0.celsius); // -18

const temp1 = new Temperature(12);

console.log(temp1.celsius); // 12;
console.log(temp1.fahrenheit); // 53.6

temp1.fahrenheit = 220;

console.log(temp1.celsius); //104.44444444444444
console.log(temp1.fahrenheit); // 220
