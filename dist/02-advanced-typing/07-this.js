"use strict";
/*

Любой доступ к ключевому слову this внутри функции подконтролен тому как функция была вызвана.
Обычно это называют "контекстом вызова".

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
//<button onclick="myClickHandler">Click Me!</button>
function myClickHandler(e) {
    this.disabled = true;
}
