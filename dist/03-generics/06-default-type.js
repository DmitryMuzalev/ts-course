"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData3 = exports.getData2 = exports.getData = void 0;
// 1
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.json();
    });
}
exports.getData = getData;
getData(""); // Promise<any>
// 2
function getData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.json();
    });
}
exports.getData2 = getData2;
getData2(""); // Promise<unknown>
function getData3(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.json();
    });
}
exports.getData3 = getData3;
const data1 = getData3(""); // Promise<IAnyObject>
getData3(""); // Promise<ITodo[]>
