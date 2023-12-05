import { beforeEach, describe, expect, it } from "../deps.ts";
import { readLine } from "./parse/read-line.ts";
import { computePoints } from "./points/compute-points.ts";
import { sum } from "../sum.ts";
import { computeWinningNumbers } from "./points/compute-winning-numbers.ts";
import { wonCards } from "./cards/won-cards.ts";

const firstIteration = (lines: string[]) =>
  lines
    .map(readLine)
    .map(computePoints)
    .reduce(sum);

const secondIteration = (lines: string[]) =>
  wonCards(lines.map(readLine).map(computeWinningNumbers));

describe("Day 4", () => {
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
      expect(firstIteration(simplifiedLines)).toBe(13);
    });

    it("compute input", () => {
      expect(firstIteration(lines)).toBe(27454);
    });
  });

  describe("Second iteration", () => {
    it("compute simplified input", () => {
      expect(secondIteration(simplifiedLines)).toBe(30);
    });

    it("compute input", () => {
      expect(secondIteration(lines)).toBe(6857330);
    });
  });
});
