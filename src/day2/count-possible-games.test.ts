import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { countPossibleGames } from "./count-possible-games.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";

describe("countPossibleGames", () => {
  it("gives 1 for only game 1 possible", () => {
    const result = countPossibleGames([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(1);
  });

  it("gives 2 for only game 2 possible", () => {
    const result = countPossibleGames([
      "Game 2: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(2);
  });

  it("gives sum of possible game id", () => {
    const result = countPossibleGames([
      "Game 1: 3 blue",
      "Game 2: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(3);
  });

  it("filters not possible games", () => {
    const result = countPossibleGames([
      "Game 1: 30 blue",
      "Game 2: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(2);
  });
});
