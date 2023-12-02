const pipe = (...fns: any) => (param: any) =>
  fns.reduce((acc: any, fn: any) => fn(acc), param);
const convertToNumber = Number;

const findFirstNumber = (s: string) => {
  return Object.entries(dictionnary)
    .map((
      [numberAsString, value],
    ) => [
      value,
      Math.min(
        ...[s.indexOf(numberAsString), s.indexOf(`${value}`)].filter((value) =>
          value !== -1
        ),
      ),
    ])
    .sort(([, indexA], [, indexB]) => indexA - indexB)[0][0];
};
const findLastNumber = (s: string) => {
  return Object.entries(dictionnary)
    .map((
      [numberAsString, value],
    ) => [
      value,
      Math.max(s.lastIndexOf(numberAsString), s.lastIndexOf(`${value}`)),
    ])
    .sort(([, indexA], [, indexB]) => indexB - indexA)[0][0];
};

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

const keepFirstAndLast = (sentence: string) =>
  `${findFirstNumber(sentence)}${findLastNumber(sentence)}`;

export const calibrate = pipe(
  keepFirstAndLast,
  convertToNumber,
);
