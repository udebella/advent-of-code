import { beforeEach, describe, expect, it } from "../deps.ts";
import { countPossibleGames } from "./validity/count-possible-games.ts";
import { gamesPower } from "./minimum/games-power.ts";

const firstIteration = countPossibleGames;

const secondIteration = gamesPower;

describe("Day 2", () => {
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
      expect(firstIteration(simplifiedLines)).toBe(8);
    });

    it("compute input", () => {
      expect(firstIteration(lines)).toBe(2265);
    });
  });

  describe("Second iteration", () => {
    it("compute simplified input", () => {
      expect(secondIteration(simplifiedLines)).toBe(2286);
    });

    it("compute input", () => {
      expect(secondIteration(lines)).toBe(64097);
    });
  });
});
