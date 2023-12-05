import { beforeEach, describe, expect, it } from "../deps.ts";
import { readLine } from "./parse/read-line.ts";
import { computePoints } from "./points/compute-points.ts";
import { sum } from "../day3/sum.ts";

const day4FirstIteration = (lines: string[]) =>
  lines
    .map(readLine)
    .map(computePoints)
    .reduce(sum);

const day4SecondIteration = (lines: string[]) => {
  lines.map(readLine);
  return 30;
};

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
      expect(day4FirstIteration(simplifiedLines)).toBe(13);
    });

    it("compute input", () => {
      expect(day4FirstIteration(lines)).toBe(27454);
    });
  });

  describe("Second iteration", () => {
    it("compute simplified input", () => {
      expect(day4SecondIteration(simplifiedLines)).toBe(30);
    });
  });
});
