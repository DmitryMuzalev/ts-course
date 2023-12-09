"use strict";
//! error let variable: Example = 12;
let variable = '12';
function checkProp(key, object) {
    return object[key];
}
const exampleObject = {
    key1: 'value1',
    key2: () => { },
    key3: {},
    key4: 4,
};
checkProp('key1', exampleObject);
checkProp('key2', exampleObject);
//! error checkProp('key5', exampleObject);
