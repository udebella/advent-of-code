const isNumber = (char: string) => !isNaN(Number(char));
const findFirstNumber = (s: string) => s.split("").find(isNumber);

export const calibrate = (s: string) =>
  Number((findFirstNumber(s) ?? "") + s.at(-1));
