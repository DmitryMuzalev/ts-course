"use strict";
/*
Asserts (утверждать, заявлять, отстаивать)

Assert — это специальная конструкция, позволяющая проверять предположения о значениях произвольных данных в произвольном месте программы.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUserDisplayNam2 = exports.logUserDisplayName = void 0;
// Step 1
function logUserDisplayName(user) {
    if (!user.displayName)
        throw new Error("User has no displayName field");
    console.log(user.displayName.toUpperCase());
}
exports.logUserDisplayName = logUserDisplayName;
// Step 2
// Допустим мы хотим вынести проверку displayName на null в отдельную функцию
/*
    ! Так не работает
    function assertDisplayName(user: User) {
        if (!user.displayName) throw new Error("User has no displayName field");
    }

    function logUserDisplayNam2(user: User): void {
        assertDisplayName(user); так не работает
        console.log(user.displayName.toUpperCase());
    }

*/
// Step 3
//* Так работает. Нужно указать утверждающий тип asserts user is User & { displayName: string }.
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error("User has no displayName field");
}
function logUserDisplayNam2(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
exports.logUserDisplayNam2 = logUserDisplayNam2;
