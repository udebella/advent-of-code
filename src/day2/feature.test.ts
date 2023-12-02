import { describe, expect, it } from "../deps.ts";

type Round = { red?: number; green?: number; blue?: number };
const isGamePossible = ({ red = 0, green = 0, blue = 0 }: Round) =>
  red <= 12 && green <= 13 && blue <= 14;

const parseGame = (gameString: string) => {
  const [game] = gameString.split(":");
  const [, gameId] = game.split(" ");
  return ({
    id: Number(gameId),
    rounds: [{ blue: 3 }],
  });
};

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
    describe("game id", () => {
      it("can read game id", () => {
        const game = parseGame(
          "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        );

        expect(game.id).toBe(1);
      });

      it("can read game id 2", () => {
        const game = parseGame("Game 2: 3 blue, 4 red;");

        expect(game.id).toBe(2);
      });

      it("can read two digit game id", () => {
        const game = parseGame("Game 20: 3 blue, 4 red;");

        expect(game.id).toBe(20);
      });
    });
  });

  describe("rounds", () => {
    it("can read one round with one type of cubes", () => {
      const game = parseGame("Game 1: 3 blue");

      expect(game.rounds).toEqual([{ blue: 3 }]);
    });
  });
});
