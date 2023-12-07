//Numbers example:
type NestedNumbers = number | NestedNumbers[];

const numbers1: NestedNumbers = 12;
const numbers2: NestedNumbers = [12];
const numbers3: NestedNumbers = [12, [12, [12, 12, 12]]];

numbers2.push([12, [12, 12]]);

//JSON example:
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: any };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(json: JSONValue): void {}

isJSON(123);
isJSON("15212");
isJSON({
  a: 12,
  b: {
    c: "23",
  },
});

isJSON([12, { a: 1 }]);
