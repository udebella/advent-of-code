const pipe = (...fns: any) => (param: any) =>
  fns.reduce((acc: any, fn: any) => fn(acc), param);
const not = (value: boolean) => !value;
const isNumber = pipe(Number, isNaN, not);

const findNumber = (fn: "find" | "findLast") => (s: string) =>
  s.split("")[fn](isNumber) ?? "";
const findFirstNumber = findNumber("find");
const findLastNumber = findNumber("findLast");

const readNumbersAsWord = (sentence: string) => {
  return sentence
    .replaceAll("one", "1")
    .replaceAll("two", "2");
};

const firstAndLast = (sentence: string) =>
  `${findFirstNumber(sentence)}${findLastNumber(sentence)}`;

export const calibrate = pipe(readNumbersAsWord, firstAndLast, Number);
