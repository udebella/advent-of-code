import { describe, it } from "https://deno.land/std@0.190.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/expect.ts";
import { readLineNumbers } from "./read-line-numbers.ts";

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

  it("can read multiple multi digit numbers on the same line", () => {
    expect(readLineNumbers("11.22.33", 3)).toEqual([
      { value: 11, x: 0, y: 3 },
      { value: 22, x: 3, y: 3 },
      { value: 33, x: 6, y: 3 },
    ]);
  });

  it("can read 3 digit numbers", () => {
    expect(readLineNumbers("111", 3)).toEqual([
      { value: 111, x: 0, y: 3 },
    ]);
  });
});
