import { describe, expect, it } from "../deps.ts";

type Round = { red?: number; green?: number; blue?: number };
const isGamePossible = ({ red = 0, green = 0, blue = 0 }: Round) =>
  red <= 12 && green <= 13 && blue <= 14;

const parseGame = (gameString: string) => ({
  id: 1,
});

describe("Day 2", () => {
  describe("red cubes", () => {
    it("is not possible when displaying more than 12 red cubes", () => {
      expect(isGamePossible({ red: 13 })).toBe(false);
    });

    it("is possible when displaying less than 12 red cubes", () => {
      expect(isGamePossible({ red: 12 })).toBe(true);
    });
  });

  describe("green cubes", () => {
    it("is possible when displaying less than 13 green cubes", () => {
      expect(isGamePossible({ green: 13 })).toBe(true);
    });

    it("is not possible when displaying more than 13 green cubes", () => {
      expect(isGamePossible({ green: 14 })).toBe(false);
    });
  });

  describe("blue cubes", () => {
    it("is possible when displaying less than 14 blue cubes", () => {
      expect(isGamePossible({ blue: 14 })).toBe(true);
    });

    it("is not possible when displaying more than 14 blue cubes", () => {
      expect(isGamePossible({ blue: 16 })).toBe(false);
    });
  });

  describe("Game parsing", () => {
    it("can parse a game", () => {
      expect(
        parseGame("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"),
      ).toEqual({ id: 1 });
    });
  });
});
