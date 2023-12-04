import { describe, expect, it } from "../deps.ts";
import { isNumber } from "./is-number.ts";

const readLineSpecialCharacters = (line: string, y: number) =>
  [...line]
    .map((value, index) => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => !isNumber(value));

describe("Day 3", () => {
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
