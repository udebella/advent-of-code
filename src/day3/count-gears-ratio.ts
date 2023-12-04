import { Game } from "./read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";

const multiply = (a: number, b: number) => a * b;

export const countGearsRatio = ({ numbers, specialCharacters }: Game) =>
  specialCharacters
    .filter(({ value }) => value === "*")
    .map(isAdjacentToNumbers(numbers))
    .filter((neighbours) => neighbours.length === 2)
    .flatMap((numbers) => numbers)
    .map(({ value }) => value)
    .reduce(multiply, 1);
