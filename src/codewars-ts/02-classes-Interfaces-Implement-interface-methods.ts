interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  constructor(public width: number) {}
  area = () => this.width ** 2;
  perimeter = () => this.width * 4;
}

export class Circle implements IGeometricFigure {
  constructor(public radius: number) {}
  private pi = Math.PI;
  area = () => this.pi * this.radius ** 2;
  perimeter = () => 2 * this.radius * this.pi;
}
