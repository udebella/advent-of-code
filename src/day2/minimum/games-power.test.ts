import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";

const gamesPower = (gamesAsString: string[]) => {
  return 48;
};

describe("Compute games power", () => {
  it("gives power for only game 1", () => {
    const result = gamesPower([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    ]);

    expect(result).toBe(48);
  });
});
