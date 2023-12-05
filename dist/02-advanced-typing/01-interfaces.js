"use strict";
/*
    Чтобы не было глобальной области видимости для элементов (закрытые интерфейсы),
    должен быть "export", т.е. файл должен быть модулем.

    "readonly" - тип параметров
    обязательный параметр, один раз записывается, но потом переписать не можем

*/
const exampleUser = {
    email: "example@mail.com",
    login: "example",
    password: "123qwerty",
};
// Теперь доступно свойство isAuth
window.isAuth = true;
const exampleEmployee = {
    firstName: "Tom",
    email: "example@mail.com",
    login: "example",
    password: "123qwerty",
    position: " developer",
};
const exampleDev = {
    firstName: "Tom",
    email: "example@mail.com",
    login: "example",
    password: "123qwerty",
    phone: "+7777",
    position: " developer",
};
exampleDev.firstName = "Dev"; // теперь не readonly
