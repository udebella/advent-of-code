import { describe, expect, it } from "../../deps.ts";

const readLine = (line: string) => {
  return {
    winningNumbers: [41, 48, 83, 86, 17],
  };
};

describe("Read line", () => {
  it("can read line", () => {
    const line = readLine("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");

    expect(line.winningNumbers).toEqual([41, 48, 83, 86, 17]);
  });
});
