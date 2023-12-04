import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";

const countGearsRatio = (game: Game) => {
  if (game.specialCharacters.length) {
    return game.numbers.map(({ value }) => value).reduce((a, b) => a * b);
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
