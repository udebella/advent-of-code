const isNumber = (char: string) => !isNaN(Number(char));

const findNumber = (fn: "find" | "findLast") => (s: string) =>
  s.split("")[fn](isNumber);
const findFirstNumber = findNumber("find");
const findLastNumber = findNumber("findLast");

export const calibrate = (s: string) => {
    const replacedWords = s
        .replaceAll('one', '1')
        .replaceAll('two', '2')
    return Number((findFirstNumber(replacedWords) ?? "1") + (findLastNumber(replacedWords) ?? '1'));
};


