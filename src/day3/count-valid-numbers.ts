import { Game } from "./read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";

const sum = (a: number, b: number) => a + b;

export const countValidNumbers = ({ numbers, specialCharacters }: Game) => {
  return specialCharacters
    .flatMap(isAdjacentToNumbers(numbers))
    .map(({ value }) => value)
    .reduce(sum, 0);
};
