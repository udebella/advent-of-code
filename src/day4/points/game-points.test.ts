import { describe, expect, it } from "../../deps.ts";
import { Game } from "../parse/read-line.ts";

const computePoints = (game: Game) => {
  const numberOfValidNumbers = game.playedNumbers
    .filter((number) => game.winningNumbers.includes(number)).length;
  return numberOfValidNumbers ? Math.pow(2, numberOfValidNumbers - 1) : 0;
};

describe("Points", () => {
  it("does not have any points when played numbers are not in winning list", () => {
    const game: Game = {
      winningNumbers: [1],
      playedNumbers: [],
    };

    expect(computePoints(game)).toBe(0);
  });

  it("count one point if one played number is in winning list", () => {
    const game: Game = {
      winningNumbers: [1],
      playedNumbers: [1],
    };

    expect(computePoints(game)).toBe(1);
  });

  it("filters numbers that are not in winning list", () => {
    const game: Game = {
      winningNumbers: [1],
      playedNumbers: [2],
    };

    expect(computePoints(game)).toBe(0);
  });

  it("double points for each matching number", () => {
    const game: Game = {
      winningNumbers: [1],
      playedNumbers: [1, 1, 1],
    };

    expect(computePoints(game)).toBe(4);
  });
});
