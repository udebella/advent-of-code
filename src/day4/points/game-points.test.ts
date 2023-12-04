import { describe, expect, it } from "../../deps.ts";
import { Game } from "../parse/read-line.ts";

const computePoints = (game: Game) => {
  return 0;
};

describe("Points", () => {
  it("does not have any points when played numbers are not in winning list", () => {
    const game: Game = {
      winningNumbers: [1],
      playedNumbers: [],
    };

    expect(computePoints(game)).toBe(0);
  });
});
