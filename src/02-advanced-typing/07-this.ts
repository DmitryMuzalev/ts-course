/* 

Любой доступ к ключевому слову this внутри функции подконтролен тому как функция была вызвана. 
Обычно это называют "контекстом вызова".

*/

export const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

//<button onclick="myClickHandler">Click Me!</button>

function myClickHandler(this: HTMLButtonElement, e: Event) {
  this.disabled = true;
}
