"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = exports.y = exports.x = void 0;
function head(value) {
    return value[0];
}
exports.x = head([1, 2, 3, 3]);
exports.y = head([true, true, true, false]);
exports.z = head("string");
