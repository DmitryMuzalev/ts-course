// Interface variant:
interface IProduct {
  title: string;
  price: number;
  isNew: boolean;
  isSale: boolean;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

export interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

//const exampleICar: ICar = {};

// Aliases variant:
type Product = {
  title: string;
  price: number;
  isNew: boolean;
  isSale: boolean;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = Product &
  Vehicle & {
    type: string;
    model: string;
  };

//const exampleCar: Car = {};
