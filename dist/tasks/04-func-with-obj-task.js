"use strict";
const user = {
    login: 'muzalev771',
    email: 'muzalev771@gmail.com',
    password: 'qwerty123',
    isOnline: true,
    lastVisited: new Date(2023, 11, 1),
};
const admin = {
    login: 'admin',
    email: 'admin@gmail.com',
    password: 'roiadmin',
    isOnline: true,
    lastVisited: new Date(2023, 11, 1),
    role: 'superuser',
};
function login(user) {
    user.login.length &&
        user.password.length &&
        console.log(`Hello, ${user.login}`);
}
login(user);
login(admin);
login({ login: '', password: '' });
