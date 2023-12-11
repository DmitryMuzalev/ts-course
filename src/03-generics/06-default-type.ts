// 1
export async function getData(url: string) {
  const response = await fetch(url);
  return response.json();
}

getData(""); // Promise<any>

// 2
export async function getData2<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

getData2(""); // Promise<unknown>

// 3
interface IAnyObject {
  [key: string]: unknown;
}

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getData3<T = IAnyObject>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

const data1 = getData3(""); // Promise<IAnyObject>
getData3<ITodo[]>(""); // Promise<ITodo[]>
