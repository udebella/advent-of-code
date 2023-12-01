const isNumber = (char: string) => !isNaN(Number(char));

const findNumber = (fn: "find" | "findLast") => (s: string) =>
  s.split("")[fn](isNumber);
const findFirstNumber = findNumber("find");
const findLastNumber = findNumber("findLast");

export const calibrate = (s: string) =>
  Number((findFirstNumber(s) ?? "1") + (findLastNumber(s) ?? '1'));


