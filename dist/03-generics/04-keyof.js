"use strict";
/*
 keyof

 В TypeScript существует возможность выводить все публичные, нестатические, принадлежащие типу ключи и на их основе создавать литеральный объединенный тип ( Union ). Для получения ключей нужно указать оператор keyof , после которого указывается тип, чьи ключи будут объединены в тип объединение keyof Type .

*/
Object.defineProperty(exports, "__esModule", { value: true });
const exampleProp = 'btoa';
const password = 'password';
const variants = 'concat'; // ("0"|"1"|"concat"|"find" .....)
