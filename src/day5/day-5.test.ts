import { beforeEach, describe, expect, it } from "../deps.ts";

const firstIteration = (lines: string[]) => -1;

const secondIteration = (lines: string[]) => -1;

describe("Day 5", () => {
  let simplifiedLines: string[];
  let lines: string[];
  beforeEach(async () => {
    simplifiedLines = (await Deno.readTextFile("./input-simplified.txt"))
      .split("\n");
    lines = (await Deno.readTextFile("./input.txt")).split("\n");
  });

  describe("First iteration", () => {
    it("compute simplified input", () => {
      expect(firstIteration(simplifiedLines)).toBe(-1);
    });

    it("compute input", () => {
      expect(firstIteration(lines)).toBe(-1);
    });
  });

  describe("Second iteration", () => {
    it("compute simplified input", () => {
      expect(secondIteration(simplifiedLines)).toBe(-1);
    });

    it("compute input", () => {
      expect(secondIteration(lines)).toBe(-1);
    });
  });
});
