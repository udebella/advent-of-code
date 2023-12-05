import { Game } from "./read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";
import { sum } from "../sum.ts";

export const countGearsRatio = ({ numbers, specialCharacters }: Game) =>
  specialCharacters
    .filter(({ value }) => value === "*")
    .map(isAdjacentToNumbers(numbers))
    .filter((neighbours) => neighbours.length === 2)
    .map(([numberA, numberB]) => numberA.value * numberB.value)
    .reduce(sum, 0);
