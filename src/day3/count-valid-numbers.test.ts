import { describe, expect, it } from "../deps.ts";

type Game = {
  numbers: { x: number; y: number; value: number }[];
  specialCharacters: any[];
};
const countValidNumbers = (game: Game) => {
  return 0;
};

describe("count valid numbers", () => {
  it("does not keep any numbers when no specialCharacters", () => {
    const game = { numbers: [{ value: 3, x: 0, y: 0 }], specialCharacters: [] };

    expect(countValidNumbers(game)).toBe(0);
  });
});
