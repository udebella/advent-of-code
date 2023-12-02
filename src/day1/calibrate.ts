const pipe = (...fns: any) => fns.reduce((acc: any, fn: any) => fn(acc))
const not = (value: boolean) => !value
const isNumber = (char: string) => pipe(char, Number, isNaN, not);

const findNumber = (fn: "find" | "findLast") => (s: string) =>
  s.split("")[fn](isNumber) ?? '';
const findFirstNumber = findNumber("find");
const findLastNumber = findNumber("findLast");

export const calibrate = (word: string) => {
    const replacedWords = word
        .replaceAll('one', '1')
        .replaceAll('two', '2')
    return Number((findFirstNumber(replacedWords)) + (findLastNumber(replacedWords)));
};


