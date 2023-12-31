"use strict";
/*
    Кортежи (Tuples) также, как и массивы, представляют набор элементов, для которых уже заранее известен тип.
    В отличие от массивов кортежи могут хранить значения разных типов. Для определения кортежа применяется синтаксис массива:
*/
const exampleTuples = [
    ["key1", "value1"],
    ["key2", "value2"],
];
// Часто используются для работы с CSV файлами
const doc = [];
doc.push(["Tom", "Black", 25, new Date(1998, 11, 7)]);
/*
Файл CSV (файл со значениями, разделенными запятыми) – это текстовый файл, формат которого позволяет сохранять данные в виде структурированной таблицы.
*/
