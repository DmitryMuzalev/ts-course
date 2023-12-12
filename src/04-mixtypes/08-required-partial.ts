export {};

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAt: Date;
}

type ReadonlyTodo = Readonly<Todo>; // делает все поля только для чтения

type PartialTodo = Partial<Todo>; // делает все поля опциональными, необязательными

type RequiredTodo = Required<Todo>; // делает все поля обязательными

type LanguageLevel = "begginer" | "junior" | "middle" | "senior" | "native";

type Skill = { language: string; level: LanguageLevel };

type Developer = {
  id: string;
  login: string;
  level: "junior" | "middle" | "senior";
  skills: Skill[];
};

function updateDeveloper(dev: Developer, updatedFields: Partial<Developer>) {
  return { ...dev, ...updatedFields };
}
