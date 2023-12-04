import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";

const multiply = (a: number, b: number) => a * b;

const countGearsRatio = ({ numbers, specialCharacters }: Game) => {
  return specialCharacters
    .flatMap(isAdjacentToNumbers(numbers))
    .map(({ value }) => value)
    .reduce(multiply, specialCharacters.length ? 1 : 0);
  if (specialCharacters.length) {
    return numbers.map(({ value }) => value).reduce(multiply);
  }
  return 0;
};

describe("count gears ratio", () => {
  it("does not keep any numbers when no specialCharacters", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [],
    };

    expect(countGearsRatio(game)).toBe(0);
  });

  it("count gear ratio when 2 adjacent numbers", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 2, x: 2, y: 0 }],
      specialCharacters: [{ value: "*", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(6);
  });
});
