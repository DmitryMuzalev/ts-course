"use strict";
const brandRecordsExample = {
    apple: { country: "USA", createAt: new Date(1995, 11, 11), name: "lisa" },
};
function printPcRecords(catalog) {
    var _a;
    console.log((_a = catalog.apple) === null || _a === void 0 ? void 0 : _a.country);
}
const partExample = {
    document: window.document,
};
