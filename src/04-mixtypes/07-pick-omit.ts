export {};

//*_1

/* 
Record (динамически определить поле в объектном типе)
Сопоставимый тип Record<K, T> предназначен для динамического определения полей в объектном типе. Данный тип определяет два параметра типа. 
В качестве первого параметра ожидается множество ключей, представленных множеством string или Literal String - Record<"a", T> или Record<"a" | "b", T>. 
В качестве второго параметра ожидается конкретный тип данных, который будет ассоциирован с каждым ключом.

В TypeScript тип Record просто позволяет нам определять словари, также называемые парами ключ/значение, 
    с фиксированным типом для ключей и фиксированным типом для значений
*/
type PcBrand = {
  name: string;
  country: string;
  createAt: Date;
};
type WellKnowBrands = "apple" | "dell" | "hp" | "huawei" | "microsoft";

type BrandNames = Record<WellKnowBrands, PcBrand>;

const brandRecordsExample: MyPcRecords = {
  dell: { country: "", name: "", createAt: new Date() },
};

//*_2

/* 
Pick (отфильтровать объектный тип)
Сопоставимый тип Pick<T, K> предназначен для фильтрации объектного типа, ожидаемого в качестве первого параметра типа. 
Фильтрация происходит на основе ключей, представленных множеством литеральных строковых типов, ожидаемых в качестве второго параметра типа.
*/

interface ITodo {
  id: number;
  title: string;
  body: string;
  completed: boolean;
  createAt: number;
}

type SimpleTodo = Pick<ITodo, "id" | "title" | "completed">;
/* 
  Результат:
    { 
    id: number;
    title: string;
    body: string;
    } 
*/

/* 
    Omit (исключить из T признаки, ассоциированные с ключами, перечисленными множеством K)
    Расширенный тип Omit<T, K> предназначен для определения нового типа путем исключения заданных признаков из существующего типа.
*/

type SimpleTodo2 = Omit<ITodo, "completed" | "createAt">;
/* 
  Результат:
    { 
    id: number;
    title: string;
    body: string;
    } 
*/

type Regions = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

//*_Tests:
//*_T1:
type CountriesByRegion = Record<Regions, string[]>;

const visitedCountries: CountriesByRegion = {
  Africa: ["Egypt", "Angola", "Tunis"],
  America: ["Mexico"],
  Asia: ["India"],
  Europe: ["Spain", "England", "Hungary"],
  Oceania: [],
};

//*_T2:
type Country = {
  name: string;
  region: string;
  population: number;
  flag: string;
  capital: string;
  currencies: string[];
  languages: string[];
};

type CountryCardProps = Pick<Country, "name" | "capital" | "region">;
type CountryCardProps2 = Omit<Country, "languages" | "currencies">;
