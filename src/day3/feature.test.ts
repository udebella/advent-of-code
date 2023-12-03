import { describe, expect, it } from "../deps.ts";

const parseLine = (s: string) => {
  return s.split(".")
    .filter((string) => string !== "" && !isNaN(Number(string)))
    .map((value) => ({ value: Number(value), x: s.indexOf(value), y: 1 }));
};

describe("Day 3", () => {
  describe("parseLine", () => {
    it("can read one 3 digit in one line", () => {
      expect(parseLine("3")).toEqual([{ value: 3, x: 0, y: 1 }]);
    });

    it("can read one 4 digit in one line", () => {
      expect(parseLine("4")).toEqual([{ value: 4, x: 0, y: 1 }]);
    });

    it("can read one 4 digit in one line with dot", () => {
      expect(parseLine(".4")).toEqual([{ value: 4, x: 1, y: 1 }]);
    });

    it("can read one 42 digit in one line with dot", () => {
      expect(parseLine(".42")).toEqual([{ value: 42, x: 1, y: 1 }]);
    });

    it("can read two numbers on one line", () => {
      expect(parseLine("4.2")).toEqual([
        { value: 4, x: 0, y: 1 },
        { value: 2, x: 2, y: 1 },
      ]);
    });

    it("ignores special characters", () => {
      expect(parseLine("4.-")).toEqual([{ value: 4, x: 0, y: 1 }]);
    });
  });
});
