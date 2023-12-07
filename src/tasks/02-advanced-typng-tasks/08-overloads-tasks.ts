function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

export const x = head([1, 2, 3, 3]);
export const y = head([true, true, true, false]);
export const z = head("string");
