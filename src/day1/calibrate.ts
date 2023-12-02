const pipe = (...fns: any) => (param: any) =>
  fns.reduce((acc: any, fn: any) => fn(acc), param);
const not = (value: boolean) => !value;
const convertToNumber = Number;
const isNumber = pipe(convertToNumber, isNaN, not);

const findNumber = (fn: "find" | "findLast") => (s: string) =>
  s.split("")[fn](isNumber) ?? "";
const findFirstNumber = findNumber("find");
const findLastNumber = findNumber("findLast");

const dictionnary = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const readNumbersAsWord = (sentence: string) =>
  Object.entries(dictionnary)
      .sort(([a], [b]) => sentence.indexOf(a) - sentence.indexOf(b))
      .reduce(
    (acc, [numberAsString, number]) =>
      acc.replaceAll(numberAsString, `${number}`),
    sentence,
  );

const keepFirstAndLast = (sentence: string) =>
  `${findFirstNumber(sentence)}${findLastNumber(sentence)}`;

export const calibrate = pipe(
  readNumbersAsWord,
  keepFirstAndLast,
  convertToNumber,
);
