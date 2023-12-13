export class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }
  public area(): number {
    return this.height * this.width;
  }
  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`);
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}

const square = new Square(12, "red");
const rectangle = new Rectangle(12, 22);
