type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

function gradeDeveloper(developer: Developer, newLevel: Level) {
  return {
    ...developer,
    level: newLevel,
  };
}

const exampleDeveloper: Developer = {
  login: "bugagashka",
  skills: ["js", "ts", "git", "react", "redux"],
  level: "middle",
};

console.log(gradeDeveloper(exampleDeveloper, "junior"));
