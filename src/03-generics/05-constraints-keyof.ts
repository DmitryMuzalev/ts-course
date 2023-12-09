interface Laptop {
  brand: string;
  cpu: string;
  memory: number;
}

type Example = Laptop['cpu']; // string
//! error let variable: Example = 12;
let variable: Example = '12';

function checkProp<T, U extends keyof T>(key: U, object: T): T[U] {
  return object[key];
}

const exampleObject = {
  key1: 'value1',
  key2: () => {},
  key3: {},
  key4: 4,
};

checkProp('key1', exampleObject);
checkProp('key2', exampleObject);
//! error checkProp('key5', exampleObject);
