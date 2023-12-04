import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";

const sum = (a: number, b: number) => a + b;

const countValidNumbers = (game: Game) => {
  return game.specialCharacters.length
    ? game.numbers.filter(({ x: numberX }) => {
      return game.specialCharacters.find(({ x: specialCharacterX }) => {
        return numberX - 1 === specialCharacterX ||
          numberX + 1 === specialCharacterX;
      });
    }).map(({ value }) => value).reduce(sum, 0)
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
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 1, x: 2, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 0 }],
    };

    expect(countValidNumbers(game)).toBe(4);
  });

  it("ignores numbers that are invalid in sum", () => {
    const game: Game = {
      numbers: [{ value: 3, x: 0, y: 0 }, { value: 1, x: 4, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 0 }],
    };

    expect(countValidNumbers(game)).toBe(3);
  });
});
