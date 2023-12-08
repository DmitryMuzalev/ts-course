/* 
Aliases (Псевдонимы)
Чтобы не делать одну и ту же работу, TypeScript позволяет задавать псевдоним для составных типов. 
Так мы не будем повторяться:
*/

type Pair = [string, string];
type Pairs = Pair[];

type User = {
  firstName: string;
  pointsCount: number;
};

/* 
Псевдоним — это не создание нового типа данных. Это способ сокращенно записать определение типа. 
*/
