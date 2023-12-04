import { readLineNumbers } from "./read-line-numbers.ts";
import { readLineSpecialCharacters } from "./read-line-special-characters.ts";

export const readGame = (strings: string[]) => ({
  numbers: strings.flatMap(readLineNumbers),
  specialCharacters: strings.flatMap(readLineSpecialCharacters),
});
