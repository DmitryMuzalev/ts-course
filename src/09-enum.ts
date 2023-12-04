/* 
    Enum (перечисление). enum представляет собой набор логически связанных констант, 
    в качестве значений которых могут выступать как числа, так и строки.

    Enum — это конструкция, состоящая из набора именованных констант, именуемая списком перечисления 
    и определяемая такими примитивными типами, как number и string. Enum объявляется с помощью ключевого слова enum.
*/

enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior",
}

interface IDev {
  name: string;
  age: number;
  skills: string[];
  level: Grades;
}

function upLevelDeveloper(dev: IDev): void {
  if (dev.level === Grades.Junior) {
    dev.level = Grades.Middle;
  } else if (dev.level === Grades.Middle) {
    dev.level = Grades.Senior;
  }
}

const exampleDeveloper2: IDev = {
  name: "Tom",
  age: 25,
  skills: ["js", "ts", "git", "react", "redux"],
  level: Grades.Middle,
};

upLevelDeveloper(exampleDeveloper2);

console.log(exampleDeveloper2);
