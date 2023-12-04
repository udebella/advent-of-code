import { describe, expect, it } from "../../deps.ts";

const readLine = (line: string) => {
  const [, numbers] = line.split(":");
  const [winningNumbers] = numbers.split("|");
  return {
    winningNumbers: [Number(winningNumbers)],
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

  it("can read different two digit winning numbers from line", () => {
    const line = readLine("Card 1: 33 | 2");

    expect(line.winningNumbers).toEqual([33]);
  });
});
