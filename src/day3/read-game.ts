import { readLineNumbers } from "./read-line-numbers.ts";

export const readGame = (strings: string[]) => ({
  numbers: strings.flatMap(readLineNumbers),
  specialCharacters: [],
});
