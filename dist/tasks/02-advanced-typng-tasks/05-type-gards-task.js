"use strict";
function isAnInternetOrder(order) {
    return !!order && order.address !== undefined;
}
function isATelephoneOrder(order) {
    return !!order && order.callerNumber !== undefined;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
