import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";
import { parseGame } from "../parse/parse-game.ts";
import { minimumMandatory } from "./minimum-mandatory.ts";
import { roundPower } from "./round-power.ts";

const gamesPower = (gamesAsString: string[]) =>
  gamesAsString.map(parseGame).map(minimumMandatory).map(roundPower).reduce((
    result,
    power,
  ) => result + power);

describe("Compute games power", () => {
  it("gives power of 48 for game 1", () => {
    const result = gamesPower([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(48);
  });

  it("gives power of 12 for game 2", () => {
    const result = gamesPower([
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    ]);

    expect(result).toBe(12);
  });

  it("can compute power of game 1 and 2", () => {
    const result = gamesPower([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    ]);

    expect(result).toBe(60);
  });
});
