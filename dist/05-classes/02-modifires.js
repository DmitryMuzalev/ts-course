"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
//_ПримерыЖ
class Vehicle {
    drive(speed) {
        console.log("Let us go with speed:", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped!");
    }
    log(speed) {
        console.log("Vehicle has changed speed to", speed);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changedSpeed(speed) {
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
