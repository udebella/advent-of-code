import { beforeEach, describe, expect, it } from "../deps.ts";
import { readLine } from "./parse/read-line.ts";
import { computePoints } from "./points/compute-points.ts";
import { sum } from "../day3/sum.ts";

const day4 = (lines: string[]) =>
  lines
    .map(readLine)
    .map(computePoints)
    .reduce(sum);

describe("Day 4", () => {
  let simplifiedLines: string[];
  let lines: string[];
  beforeEach(async () => {
    simplifiedLines = (await Deno.readTextFile("./input-simplified.txt")).split(
      "\n",
    );
    lines = (await Deno.readTextFile("./input.txt")).split("\n");
  });

  it("compute simplified input", () => {
    expect(day4(simplifiedLines)).toBe(13);
  });

  it("compute input", () => {
    expect(day4(lines)).toBe(27454);
  });
});
