"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    go() {
        console.log("Let us go");
    }
    go2(speed) {
        // нужно дублировать типы для параметров
        console.log("Let us go now" + speed);
    }
    stop() {
        console.log("Stopped"); // не будет ошибки при указании метода в интерфейсе
    }
}
exports.Car = Car;
const car = new Car(); // тип Car
//! car.maxSpeed = 200; error т.к не указан в классе
