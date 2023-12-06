// Объединение алисов при union значениях:
type Unions1 = "a" | "b" | "c" | "d";
type Unions2 = "a" | "g" | "c" | "k";
type Unions3 = Unions1 | Unions2; // all variants
type Unions4 = Unions1 & Unions2; // "a" | "c"

// Объединение алисов при значениях в виде объектов:

type Object1 = { a: string; b: string; c: boolean };
type Object2 = { a?: string; f: boolean; n: boolean };

type Object3 = Object1 & Object2;
const exampleObject3: Object3 = {
  a: "string",
  b: "string",
  c: false,
  f: false,
  n: true,
}; // при объединении унаследует все свойства из Object1 и Object2

// Расширение свойства
type Object4 = {
  m: Date;
} & Object3;
