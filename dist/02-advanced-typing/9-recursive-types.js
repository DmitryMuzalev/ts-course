"use strict";
const numbers1 = 12;
const numbers2 = [12];
const numbers3 = [12, [12, [12, 12, 12]]];
numbers2.push([12, [12, 12]]);
function isJSON(json) { }
isJSON(123);
isJSON("15212");
isJSON({
    a: 12,
    b: {
        c: "23",
    },
});
isJSON([12, { a: 1 }]);
