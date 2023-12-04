import { isNumber } from "./is-number.ts";

export const readLineSpecialCharacters = (line: string, y: number) =>
  [...line]
    .map((value, index) => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => !isNumber(value));
