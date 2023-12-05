"use strict";
/*
   Interface — это синтаксическая конструкция, предназначенная
   для описания открытой ( public ) части объекта без реализации (api).
*/
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
    isNew: true,
};
const car2 = {
    wheels: 4,
    brand: 'Ford',
    type: 'sedan',
    model: 'Focus',
};
car2['go'] = true; // если свойства опциональные или динамические, для отличия принято записывать в таком формате
