function printPosition(position: { x: string; y: string }): void {
  console.log(`
   Position 
   x: ${position.x}
   y: ${position.y}
   `);
}

const obj = {
  x: '1',
  y: '2',
};

const obj2 = {
  x: '2',
  y: '3',
  z: 3,
};

printPosition(obj);
printPosition(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(`Hello, ${user.firstName.toUpperCase()} `);
  console.log(`Hello, ${user.lastName?.toUpperCase()} `); // если свойство опциональное, то нужно проверять его наличие.
}
