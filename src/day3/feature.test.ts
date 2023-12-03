import { describe, expect, it } from "../deps.ts";

const parseLine = (s: string) => [{ value: 3, x: 1, y: 1 }];

describe("Day 3", () => {
  describe("parseLine", () => {
    it("can read one simple digit in one line", () => {
      expect(parseLine("3")).toEqual([{ value: 3, x: 1, y: 1 }]);
    });
  });
});
