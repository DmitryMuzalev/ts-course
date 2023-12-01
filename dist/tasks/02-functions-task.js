"use strict";
function slice(str, start, end) {
    let newString = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newString += str[i];
    }
    return newString;
}
