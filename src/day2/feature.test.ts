import {describe, expect, it} from "../deps.ts";

const isGamePossible = ({red}: { red: number }) => {
  return red <= 12;
};

describe("Day 2", () => {
  it("is not possible when displaying more than 12 red cubes", () => {
    expect(isGamePossible({ red: 13 })).toBe(false);
  });

  it("is possible when displaying less than 12 red cubes", () => {
    expect(isGamePossible({ red: 12 })).toBe(true);
  });
});
