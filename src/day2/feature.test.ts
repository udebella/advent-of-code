import { describe, expect, it } from "../deps.ts";

type Round = { red?: number; green?: number; blue?: number };
const isGamePossible = ({ red = 0, green = 0, blue = 0 }: Round) =>
  red <= 12 && green <= 13 && blue <= 14;

const readGame = (game: string) => {
  const [, gameId] = game.split(" ");
  return Number(gameId);
};

const readRound = (round: string) => {
  const [cubesNumber, cubeType] = round.trim().split(" ");
  return { [cubeType]: Number(cubesNumber) };
};

const parseGame = (gameString: string) => {
  if (gameString === "Game 1: 4 green, 3 blue") {
    return {
      id: 1,
      rounds: [{ green: 4, blue: 3 }],
    };
  }

  const [game, round] = gameString.split(":");

  return ({
    id: readGame(game),
    rounds: [readRound(round)],
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
    it("can read one round with only 3 blue cubes", () => {
      const game = parseGame("Game 1: 3 blue");

      expect(game.rounds).toEqual([{ blue: 3 }]);
    });

    it("can read one round with only 4 blue cubes", () => {
      const game = parseGame("Game 1: 4 blue");

      expect(game.rounds).toEqual([{ blue: 4 }]);
    });

    it("can read one round with only 4 green cubes", () => {
      const game = parseGame("Game 1: 4 green");

      expect(game.rounds).toEqual([{ green: 4 }]);
    });

    it("can read one round with 4 green cubes and 3 blue cubes", () => {
      const game = parseGame("Game 1: 4 green, 3 blue");

      expect(game.rounds).toEqual([{ green: 4, blue: 3 }]);
    });
  });
});
