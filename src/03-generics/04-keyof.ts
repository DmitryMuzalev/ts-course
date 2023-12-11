/* 
 keyof 

 В TypeScript существует возможность выводить все публичные, нестатические, принадлежащие типу ключи и на их основе создавать литеральный объединенный тип ( Union ). 
 Для получения ключей нужно указать оператор keyof , после которого указывается тип, чьи ключи будут объединены в тип объединение keyof Type .

*/

type WindowProp = keyof Window;
const exampleProp: WindowProp = "blur";

export interface IUser {
  login: string;
  password: number;
}

type IUserParameters = keyof IUser; // ("login" | "password")
const password: IUserParameters = "password";

type Tup1 = keyof [number, string, boolean]; // ("0"|"1"|"2"|"concat"|"find" .....)

const variants: Tup1 = "concat";
