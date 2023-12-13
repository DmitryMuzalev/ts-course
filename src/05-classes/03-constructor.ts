export class Vehicle {
  constructor(private createAt: Date) {}

  public drive(speed: number): void {
    console.log("Let us go with speed:", speed.toFixed(), this.createAt);
    this.log(speed);
  }

  public stop(): void {
    console.log("Stopped!");
  }

  private log(speed: number): void {
    console.log("Vehicle has changed speed to", speed);
  }

  protected alternativeLog(text: string): void {
    console.log(text.toUpperCase());
  }
}

//*_1
class Car1 extends Vehicle {
  color: string;
  speed: number;
  constructor(color: string, speed: number) {
    super(new Date());
    this.color = color;
    this.speed = speed;
  }
}

//*_2
class Car2 extends Vehicle {
  constructor(public color: string, public speed: number) {
    super(new Date());
  }
}
