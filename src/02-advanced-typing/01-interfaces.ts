/* 
    Чтобы не было глобальной области видимости для элементов (закрытые интерфейсы),
    должен быть "export", т.е. файл должен быть модулем.

    "readonly" - тип параметров
    обязательный параметр, один раз записывается, но потом переписать не можем   

*/

interface Profile {
  readonly email: string;
  readonly login: string;
  password: string;
}

// какой-то код...
// расширение интерфейса:

interface Profile {
  isOnline?: boolean;
}

const exampleUser: Profile = {
  email: "example@mail.com",
  login: "example",
  password: "123qwerty",
};

//! exampleUser.email = "muzalev@mail.com"

// Пример расширение глобальных интерфейсов
interface Window {
  isAuth?: boolean;
}

// Теперь доступно свойство isAuth
window.isAuth = true;

interface Person {
  readonly firstName: string;
  lastName?: string;
  phone?: string;
  yearOfBerth?: number;
}

// Объединение нескольких интерфейсов:
interface Employee extends Person, Profile {
  position: string;
}

const exampleEmployee: Employee = {
  firstName: "Tom",
  email: "example@mail.com",
  login: "example",
  password: "123qwerty",
  position: " developer",
};

interface Dev extends Employee {
  firstName: string; // можно изменять обязательность параметра
  phone: string; // можно изменять обязательность параметра
}

const exampleDev: Dev = {
  firstName: "Tom",
  email: "example@mail.com",
  login: "example",
  password: "123qwerty",
  phone: "+7777",
  position: " developer",
};

exampleDev.firstName = "Dev"; // теперь не readonly
