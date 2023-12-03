/* 
   Interface — это синтаксическая конструкция, предназначенная 
   для описания открытой ( public ) части объекта без реализации (api).
*/

interface ICar {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  model?: string;

  [key: string]: unknown; // неограниченное количество полей
}

const car: ICar = {
  wheels: 4,
  brand: 'BMW',
  type: 'sedan',
  isNew: true,
};

const car2: ICar = {
  wheels: 4,
  brand: 'Ford',
  type: 'sedan',
  model: 'Focus',
};

car2['go'] = true; // если свойства опциональные или динамические, для отличия принято записывать в таком формате
