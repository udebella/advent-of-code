import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";

const countValidNumbers = (game: Game) => {
  return game.specialCharacters.length
    ? game.numbers.map(({ value }) => value).reduce((a, b) => a + b)
    : 0;
};

describe("count valid numbers", () => {
  it("does not keep any numbers when no specialCharacters", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [],
    };

    expect(countValidNumbers(game)).toBe(0);
  });

  it("keeps numbers adjacent to specialCharacters", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 0 }],
    };

    expect(countValidNumbers(game)).toBe(3);
  });

  it("sum value of valid numbers", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 1, x: 3, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 0 }],
    };

    expect(countValidNumbers(game)).toBe(4);
  });
});
