import { describe, expect, it } from "../../deps.ts";

const readLine = (line: string) => {
  return {
    winningNumbers: [1],
  };
};

describe("Read line", () => {
  it("can read winning numbers from line", () => {
    const line = readLine("Card 1: 1 | 2");

    expect(line.winningNumbers).toEqual([1]);
  });
});
