export {};

//*_1
type Side = 'top' | 'right' | 'bottom' | 'left';

type Margin = `margin${'' | Capitalize<Side>}`;
type Padding = `padding${'' | Capitalize<Side>}`;

//*_2

type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassName = `fade${Capitalize<Entry>}${Capitalize<
  Direction | Position
>}`; //

//*_3

interface ICar {
  brand: string;
  model: string;
  year: number;
}

type CarFactory = {
  [K in keyof ICar as `set${Capitalize<K>}`]: (
    car: ICar,
    value: ICar[K]
  ) => void;
}; // setBrand:(car:ICar, value:string) => void; ...
