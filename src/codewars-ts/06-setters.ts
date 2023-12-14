declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  length: number;
  surfaceArea: number;
  volume: number;
}

export class Cube implements ICuboid {
  private _surfaceArea = 0;
  private _volume = 0;
  constructor(public length: number) {}

  get surfaceArea() {
    this._surfaceArea = 6 * this.length ** 2;
    return this._surfaceArea;
  }

  set surfaceArea(value: number) {
    this._surfaceArea = value;
    this.length = Math.sqrt(this._surfaceArea / 6);
  }

  get volume() {
    this._volume = this.length ** 3;
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;
    this.length = Math.cbrt(value);
  }
}

const cube = new Cube(1);

cube.surfaceArea = 54;
console.log(cube.length);
