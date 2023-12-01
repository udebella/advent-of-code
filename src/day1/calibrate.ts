const isNumber = (char: string) => !isNaN(Number(char));
const findFirstNumber = (s: string) => s.split("").find(isNumber);
const findLastNumber = (s: string) => s.split("").findLast(isNumber);

export const calibrate = (s: string) =>
  Number((findFirstNumber(s) ?? "") + findLastNumber(s));
