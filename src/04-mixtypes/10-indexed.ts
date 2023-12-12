export {};

//! Не рекомендуется так писать interface, лучше дробить по частям, т.е на маленькие interface или type

interface DataModel {
  id: number;
  title: string;
  elements: {
    header: {
      title: string;
      description: string;
      links: string[];
    };
    footer: {
      description: string;
      links: string[];
    };
    body: {
      title: string;
      content: {};
    };
  };
}

type T0 = DataModel['elements']['footer'];

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, 'str', true, '', ''];

type T1 = someTuple[2]; // boolean
type T2 = someTuple[3]; // string

const sizes = ['small', 'medium', 'large'] as const; // readonly ["small", "medium", "large"]

type T3 = (typeof sizes)[number]; // подучаем union "small" | "medium" | "large"
