import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";
import { isAdjacentToNumbers } from "./is-adjacent-to-numbers.ts";

const multiply = (a: number, b: number) => a * b;

const countGearsRatio = ({ numbers, specialCharacters }: Game) =>
  specialCharacters
    .filter(({ value }) => value === "*")
    .map(isAdjacentToNumbers(numbers))
    .filter((neighbours) => neighbours.length === 2)
    .flatMap((numbers) => numbers)
    .map(({ value }) => value)
    .reduce(multiply, 1);

describe("count gears ratio", () => {
  it("does not keep any numbers when no specialCharacters", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [],
    };

    expect(countGearsRatio(game)).toBe(1);
  });

  it("count gear ratio when 2 adjacent numbers", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 2, x: 2, y: 0 }],
      specialCharacters: [{ value: "*", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(6);
  });

  it("ignores special characters that are not gears", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 2, x: 2, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(1);
  });

  it("only counts gears that are adjacent to 2 numbers", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [{ value: "*", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(1);
  });
});
