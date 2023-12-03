import { describe, expect, it } from "../deps.ts";
import { parseGame } from "./parse-game.ts";

describe("Day 2", () => {
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

      it("can read multiple rounds", () => {
        const game = parseGame(
          "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        );

        expect(game.rounds).toEqual([
          { red: 4, blue: 3 },
          { red: 1, green: 2, blue: 6 },
          { green: 2 },
        ]);
      });
    });
  });
});
