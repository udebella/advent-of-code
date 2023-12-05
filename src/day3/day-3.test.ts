import { beforeEach, describe, expect, it } from "../deps.ts";
import { countValidNumbers } from "./rules/count-valid-numbers.ts";
import { readGame } from "./parse/read-game.ts";
import { countGearsRatio } from "./rules/count-gears-ratio.ts";

const firstIteration = (lines: string[]) => countValidNumbers(readGame(lines));

const secondIteration = (lines: string[]) => countGearsRatio(readGame(lines));

describe("Day 3", () => {
  let simplifiedLines: string[];
  let lines: string[];
  beforeEach(async () => {
    simplifiedLines = (await Deno.readTextFile("./input-simplified.txt")).split(
      "\n",
    );
    lines = (await Deno.readTextFile("./input.txt")).split("\n");
  });

  describe("First iteration", () => {
    it("compute simplified input", () => {
      expect(firstIteration(simplifiedLines)).toBe(4361);
    });

    it("compute input", () => {
      expect(firstIteration(lines)).toBe(530849);
    });
  });

  describe("Second iteration", () => {
    it("compute simplified input", () => {
      expect(secondIteration(simplifiedLines)).toBe(467835);
    });

    it("compute input", () => {
      expect(secondIteration(lines)).toBe(84900879);
    });
  });
});
