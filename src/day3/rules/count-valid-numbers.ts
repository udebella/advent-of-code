import { Game } from "../parse/read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";
import { sum } from "../../sum.ts";

export const countValidNumbers = ({ numbers, specialCharacters }: Game) => {
  return specialCharacters
    .flatMap(isAdjacentToNumbers(numbers))
    .map(({ value }) => value)
    .reduce(sum, 0);
};
