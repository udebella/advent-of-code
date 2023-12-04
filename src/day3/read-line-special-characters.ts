import { isNumber } from "./is-number.ts";

export type SpecialCharacter = { value: string; x: number; y: number };
export const readLineSpecialCharacters = (
  line: string,
  y: number,
): SpecialCharacter[] =>
  [...line]
    .map((value, index) => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => !isNumber(value));
