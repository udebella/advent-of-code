import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";

const countGearsRatio = (game: Game) => {
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
});
