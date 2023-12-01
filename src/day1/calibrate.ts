const isNumber = (char: string) => !isNaN(Number(char));

export const calibrate = (s: string) =>
  Number((s.split("").find(isNumber) ?? "") + s.at(-1));
