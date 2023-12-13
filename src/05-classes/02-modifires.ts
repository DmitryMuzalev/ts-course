/* 

*PUBLIC
Члены, помеченные ключевым словом public, доступны в определяющих их классах, их потомках, 
а также к ним можно обращаться через экземпляр или, в случае статических членов, через ссылку на класс.

*PRIVATE
Модификатор доступа private является полной противоположностью модификатору доступа public. 
Члены, помеченные с помощью ключевого слова private, доступны только контексту класса, в котором они определены.

*PROTECTED
Члены, которым установлен модификатор доступа protected, доступны только контексту класса, в котором они определены, 
а также всем его потомкам. Попытка обратиться к членам, помеченным как protected, снаружи, приведет к возникновению ошибки.

*/

//_ПримерыЖ

export class Vehicle {
  public drive(speed: number): void {
    console.log("Let us go with speed:", speed.toFixed());
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

class Car extends Vehicle {
  changedSpeed(speed: number) {
    this.drive(speed);
    //! this.log(speed); error
    this.alternativeLog("Speed was changed!");
  }
}

const car = new Car();
const vehicle = new Vehicle();

//!car.alternativeLog("Message!")

//! error vehicle.log(12);
//! error vehicle.alternativeLog("Message!");
