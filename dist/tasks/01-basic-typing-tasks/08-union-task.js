"use strict";
function gradeDeveloper(developer, newLevel) {
    return Object.assign(Object.assign({}, developer), { level: newLevel });
}
const exampleDeveloper = {
    login: "Tom",
    skills: ["js", "ts", "git", "react", "redux"],
    level: "middle",
};
console.log(gradeDeveloper(exampleDeveloper, "junior"));
