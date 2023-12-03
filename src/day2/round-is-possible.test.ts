import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";
import { isRoundPossible } from "./round-is-possible.ts";

describe("RoundIsPossible", () => {
  describe("red cubes", () => {
    it("is not possible when displaying more than 12 red cubes", () => {
      expect(isRoundPossible({ red: 13 })).toBe(false);
    });

    it("is possible when displaying less than 12 red cubes", () => {
      expect(isRoundPossible({ red: 12 })).toBe(true);
    });
  });

  describe("green cubes", () => {
    it("is possible when displaying less than 13 green cubes", () => {
      expect(isRoundPossible({ green: 13 })).toBe(true);
    });

    it("is not possible when displaying more than 13 green cubes", () => {
      expect(isRoundPossible({ green: 14 })).toBe(false);
    });
  });

  describe("blue cubes", () => {
    it("is possible when displaying less than 14 blue cubes", () => {
      expect(isRoundPossible({ blue: 14 })).toBe(true);
    });

    it("is not possible when displaying more than 14 blue cubes", () => {
      expect(isRoundPossible({ blue: 16 })).toBe(false);
    });
  });
});
