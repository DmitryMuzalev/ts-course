/* 


Представим, что дженерики пропали из языка. Тогда произойдет дублирование кода. Придется описывать один и тот же алгоритм для разных типов данных много раз.

Generic или Универсальные типы

В TypeScript, generic (обобщения) позволяют создавать компоненты, функции или классы, 
которые могут работать с различными типами данных, сохраняя при этом типовую безопасность. 

*/

//function head(value: string): string;
//function head(value: number[]): string;
//function head(value: string[]): string;
//function head(value: boolean[]): boolean;
//function head(value: Date[]): Date;
//function head(value: any): any {
//  return value[0];
//}

//interface ModuleDate {
//  title: string;
//  value: string; // number, [] , boolean
//}
