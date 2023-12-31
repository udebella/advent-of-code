import { describe, expect, it } from "../deps.ts";
import { calibrate } from "./calibrate.ts";

describe("calibration", () => {
  it("calibrates 1abc2 to 12", () => {
    expect(calibrate("1abc2")).toBe(12);
  });

  it("calibrates 1abc3 to 13", () => {
    expect(calibrate("1abc3")).toBe(13);
  });

  it("calibrates 2abc3 to 23", () => {
    expect(calibrate("2abc3")).toBe(23);
  });

  it("calibrates 2abcd3 to 23", () => {
    expect(calibrate("2abcd3")).toBe(23);
  });

  it("calibrates a2bcd3 to 23", () => {
    expect(calibrate("a2bcd3")).toBe(23);
  });

  it("calibrates 2bcd3e to 23", () => {
    expect(calibrate("2bcd3e")).toBe(23);
  });

  [
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ].forEach(([numberAsWord, number]) => {
    it(`calibrates ${numberAsWord} to ${number}${number}`, () => {
      expect(calibrate(numberAsWord)).toBe(Number(`${number}${number}`));
    });
  });

  it(`calibrates twone to 21`, () => {
    expect(calibrate("twone")).toBe(21);
  });

  it(`calibrates two1nine to 29`, () => {
    expect(calibrate("two1nine")).toBe(29);
  });

  it(`calibrates eightwothree to 83`, () => {
    expect(calibrate("eightwothree")).toBe(83);
  });

  it(`calibrates abcone2threexyz to 13`, () => {
    expect(calibrate("abcone2threexyz")).toBe(13);
  });

  it(`calibrates xtwone3four to 24`, () => {
    expect(calibrate("xtwone3four")).toBe(24);
  });

  it(`calibrates 4nineeightseven2 to 42`, () => {
    expect(calibrate("4nineeightseven2")).toBe(42);
  });

  it(`calibrates zoneight234 to 14`, () => {
    expect(calibrate("zoneight234")).toBe(14);
  });

  it(`calibrates 7pqrstsixteen to 76`, () => {
    expect(calibrate("7pqrstsixteen")).toBe(76);
  });

  it(`calibrates oneigthoneight to 18`, () => {
    expect(calibrate("oneigthoneight")).toBe(18);
  });

  it(`calibrates z7onetwonec to 71`, () => {
    expect(calibrate("z7onetwonec")).toBe(71);
  });

  it(`calibrates boneightfournq6ndnqpdbm97five to 15`, () => {
    expect(calibrate("boneightfournq6ndnqpdbm97five")).toBe(15);
  });
});
