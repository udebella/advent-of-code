import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { isGamePossible } from "./game-is-possible.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";

describe("gameIsPossible", () => {
  it("is not possible when round is not possible", () => {
    const isPossible = isGamePossible({ id: 1, rounds: [{ red: 13 }] });

    expect(isPossible).toBe(false);
  });

  it("is possible when round is possible", () => {
    const isPossible = isGamePossible({ id: 1, rounds: [{ red: 10 }] });

    expect(isPossible).toBe(true);
  });

  it("is not possible when round 2 is not possible", () => {
    const isPossible = isGamePossible({
      id: 1,
      rounds: [{ red: 10 }, { red: 20 }],
    });

    expect(isPossible).toBe(false);
  });
});
