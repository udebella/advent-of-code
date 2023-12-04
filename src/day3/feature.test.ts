import { describe, expect, it } from "../deps.ts";

const isNumber = (string: string): boolean => !isNaN(Number(string));

const combineAdjacentNumbers = (
  first: LineNumber,
  next: LineNumber,
): LineNumber => ({
  value: first.value + next.value,
  x: first.x,
  y: first.y,
});

type LineNumber = { value: string; x: number; y: number };
const readLineNumbers = (line: string, y: number) =>
  [...line]
    .map((value, index) => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => isNumber(value))
    .reduce((acc: LineNumber[], next: LineNumber) => {
      const [first, ...rest] = acc;
      if (first && next.x === first.x + 1) {
        return [...rest, combineAdjacentNumbers(first, next)];
      }
      return [...acc, next];
    }, [])
    .map(({ value, x, y }) => ({ value: Number(value), x, y }));

const readLineSpecialCharacters = (line: string, y: number) =>
  [...line]
    .map((value, index) => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => !isNumber(value));

describe("Day 3", () => {
  describe("readLineNumbers", () => {
    it("can read one 3 digit in one line", () => {
      expect(readLineNumbers("3", 0)).toEqual([{ value: 3, x: 0, y: 0 }]);
    });

    it("can read one 4 digit in one line", () => {
      expect(readLineNumbers("4", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("can read one 4 digit in one line with dot", () => {
      expect(readLineNumbers(".4", 0)).toEqual([{ value: 4, x: 1, y: 0 }]);
    });

    it("can read one 42 digit in one line with dot", () => {
      expect(readLineNumbers(".42", 0)).toEqual([{ value: 42, x: 1, y: 0 }]);
    });

    it("can read two numbers on one line", () => {
      expect(readLineNumbers("4.2", 0)).toEqual([
        { value: 4, x: 0, y: 0 },
        { value: 2, x: 2, y: 0 },
      ]);
    });

    it("ignores special characters", () => {
      expect(readLineNumbers("4.-", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("handles special characters next to number", () => {
      expect(readLineNumbers("4-", 0)).toEqual([{ value: 4, x: 0, y: 0 }]);
    });

    it("can read the 3rd line", () => {
      expect(readLineNumbers("4", 3)).toEqual([{ value: 4, x: 0, y: 3 }]);
    });

    it("does not mix multiple occurrence of the same number", () => {
      expect(readLineNumbers("41.4", 3)).toEqual([
        { value: 41, x: 0, y: 3 },
        { value: 4, x: 3, y: 3 },
      ]);
    });
  });

  describe("readLineSpecialCharacters", () => {
    it("can read one special character alone", () => {
      expect(readLineSpecialCharacters("-", 0)).toEqual([
        { value: "-", x: 0, y: 0 },
      ]);
    });

    it("can read different special character alone", () => {
      expect(readLineSpecialCharacters("$", 0)).toEqual([
        { value: "$", x: 0, y: 0 },
      ]);
    });

    it("can read another line", () => {
      expect(readLineSpecialCharacters("-", 3)).toEqual([
        { value: "-", x: 0, y: 3 },
      ]);
    });

    it("ignores empty spaces", () => {
      expect(readLineSpecialCharacters("-.", 3)).toEqual([
        { value: "-", x: 0, y: 3 },
      ]);
    });

    it("can be in other position than first", () => {
      expect(readLineSpecialCharacters(".-", 3)).toEqual([
        { value: "-", x: 1, y: 3 },
      ]);
    });

    it("can have multiple special character on the same line", () => {
      expect(readLineSpecialCharacters("$.-", 3)).toEqual([
        { value: "$", x: 0, y: 3 },
        { value: "-", x: 2, y: 3 },
      ]);
    });
  });
});
