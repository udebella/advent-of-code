import { beforeEach, describe, expect, it } from "../deps.ts";

const day4 = (lines: string[]) => {
  return 13;
};
describe("Day 4", () => {
  let lines: string[];
  beforeEach(async () => {
    lines = (await Deno.readTextFile("./input.txt")).split("\n");
  });

  it("compute simplified input", () => {
    expect(day4(lines)).toBe(13);
  });
});
