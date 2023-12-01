function slice(str: string, start: number, end?: number): string {
  let newString = '';
  let lastIndex: number;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newString += str[i];
  }

  return newString;
}
