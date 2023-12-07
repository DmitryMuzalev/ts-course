/* 

Перегрузка функций в TypeScript — это механизм, который стоит использовать, когда нет другого выбора. 
В большинстве случаев вместо перегрузки используются объединения или дженерики.

*/

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

add(3, 2);
add("3", "2");

type asyncCb = (a: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb?: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}

function getSum(n: number): number {
  return n;
}

asyncSum(2, 3);
asyncSum(2, 3, getSum);
