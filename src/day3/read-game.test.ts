import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";
import { readGame } from "./read-game.ts";

describe("readGame", () => {
  it("reads default empty line", () => {
    expect(readGame(["."])).toEqual({
      numbers: [],
      specialCharacters: [],
    });
  });

  it("reads a simple line", () => {
    expect(readGame(["3"])).toEqual({
      numbers: [{ value: 3, x: 0, y: 0 }],
      specialCharacters: [],
    });
  });
});
