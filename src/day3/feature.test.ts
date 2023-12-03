import { describe, expect, it } from "../deps.ts";

const parseLine = (s: string) => [{ value: Number(s), x: 1, y: 1 }];

describe("Day 3", () => {
  describe("parseLine", () => {
    it("can read one 3 digit in one line", () => {
      expect(parseLine("3")).toEqual([{ value: 3, x: 1, y: 1 }]);
    });

    it("can read one 4 digit in one line", () => {
      expect(parseLine("4")).toEqual([{ value: 4, x: 1, y: 1 }]);
    });
  });
});
