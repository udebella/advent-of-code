import { describe, expect, it } from "../deps.ts";
import { Game } from "./read-game.ts";
import { SpecialCharacter } from "./read-line-special-characters.ts";
import { Number } from "./read-line-numbers.ts";

const sum = (a: number, b: number) => a + b;

const isAdjacentToSpecialCharacter =
  (specialCharacters: SpecialCharacter[]) => (number: Number) => {
    const { x: numberX, y: numberY, value } = number;
    const numberSize = `${value}`.length;
    return specialCharacters
      .find(({ x: specialCharacterX, y: specialCharacterY }) =>
        numberX - 1 <= specialCharacterX &&
        numberX + numberSize >= specialCharacterX &&
        numberY + 1 >= specialCharacterY
      );
  };

const countValidNumbers = ({ numbers, specialCharacters }: Game) => {
  return numbers
    .filter(isAdjacentToSpecialCharacter(specialCharacters))
    .map(({ value }) => value)
    .reduce(sum, 0);
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

  it("takes into account size of the number", () => {
    const game: Game = {
      numbers: [{ value: 34, x: 0, y: 0 }],
      specialCharacters: [{ value: "$", x: 2, y: 0 }],
    };

    expect(countValidNumbers(game)).toBe(34);
  });

  it("takes into account special character that are on next line", () => {
    const game: Game = {
      numbers: [{ value: 34, x: 0, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 1 }],
    };

    expect(countValidNumbers(game)).toBe(34);
  });

  it("ignore special character that are 2 lines under the number", () => {
    const game: Game = {
      numbers: [{ value: 34, x: 0, y: 0 }],
      specialCharacters: [{ value: "$", x: 1, y: 2 }],
    };

    expect(countValidNumbers(game)).toBe(0);
  });
});
