import { describe, expect, it } from "../deps.ts";

const parseLine = (s: string, y: number) => {
  return s.split(/[^0-9]/)
    .filter((string) => string !== "")
    .map((value) => ({
      value: Number(value),
      x: s.indexOf(value),
      y,
    }));
};

describe("Day 3", () => {
  describe("parseLine", () => {
    it("can read one 3 digit in one line", () => {
      expect(parseLine("3", 0)).toEqual([{ value: 3, x: 0, y: 0 }]);
    });

    it("can read one 4 digit in one line", () => {
      expect(parseLine("4", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("can read one 4 digit in one line with dot", () => {
      expect(parseLine(".4", 0)).toEqual([{ value: 4, x: 1, y: 0 }]);
    });

    it("can read one 42 digit in one line with dot", () => {
      expect(parseLine(".42", 0)).toEqual([{ value: 42, x: 1, y: 0 }]);
    });

    it("can read two numbers on one line", () => {
      expect(parseLine("4.2", 0)).toEqual([
        { value: 4, x: 0, y: 0 },
        { value: 2, x: 2, y: 0 },
      ]);
    });

    it("ignores special characters", () => {
      expect(parseLine("4.-", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("handles special characters next to number", () => {
      expect(parseLine("4-", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("can read the 3rd line", () => {
      expect(parseLine("4", 3)).toEqual([{ value: 4, x: 0, y: 3 }]);
    });
  });
});
