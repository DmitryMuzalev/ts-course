"use strict";
/*

Перегрузка функций в TypeScript — это механизм, который стоит использовать, когда нет другого выбора.
В большинстве случаев вместо перегрузки используются объединения или дженерики.

*/
function add(a, b) {
    return a + b;
}
add(3, 2);
add("3", "2");
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
function getSum(n) {
    return n;
}
asyncSum(2, 3);
asyncSum(2, 3, getSum);
