import { Number, readLineNumbers } from "./read-line-numbers.ts";
import {
  readLineSpecialCharacters,
  SpecialCharacter,
} from "./read-line-special-characters.ts";

export type Game = {
  numbers: Number[];
  specialCharacters: SpecialCharacter[];
};
export const readGame = (strings: string[]): Game => ({
  numbers: strings.flatMap(readLineNumbers),
  specialCharacters: strings.flatMap(readLineSpecialCharacters),
});
