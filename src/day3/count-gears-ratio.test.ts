import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";
import { countGearsRatio } from "./count-gears-ratio.ts";

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

  it("ignores special characters that are not gears", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 2, x: 2, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(0);
  });

  it("only counts gears that are adjacent to 2 numbers", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [{ value: "*", x: 1, y: 1 }],
    };

    expect(countGearsRatio(game)).toBe(0);
  });

  it("sums gears ratios", () => {
    const game: Game = {
      numbers: [
        { value: 3, x: 0, y: 0 },
        { value: 2, x: 2, y: 0 },
        { value: 4, x: 4, y: 0 },
      ],
      specialCharacters: [
        { value: "*", x: 1, y: 1 },
        { value: "*", x: 3, y: 1 },
      ],
    };

    expect(countGearsRatio(game)).toBe(3 * 2 + 2 * 4);
  });
});
