import { describe, expect, it } from "../../deps.ts";

const readLine = (line: string) => {
  return {
    winningNumbers: [Number(line[8])],
  };
};

describe("Read line", () => {
  it("can read winning numbers from line", () => {
    const line = readLine("Card 1: 1 | 2");

    expect(line.winningNumbers).toEqual([1]);
  });

  it("can read different winning numbers from line", () => {
    const line = readLine("Card 1: 3 | 2");

    expect(line.winningNumbers).toEqual([3]);
  });
});
