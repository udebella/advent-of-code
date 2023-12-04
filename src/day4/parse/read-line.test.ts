import { describe, expect, it } from "../../deps.ts";

const readNumbers = (numbers: string) =>
  numbers.split(" ")
    .filter((string) => string !== "")
    .map(Number);

const readLine = (line: string) => {
  const [, numbers] = line.split(":");
  const [winningNumbers, playedNumbers] = numbers.split("|");
  return {
    playedNumbers: readNumbers(playedNumbers),
    winningNumbers: winningNumbers.split(" ")
      .filter((string) => string !== "")
      .map(Number),
  };
};

describe("Read line", () => {
  describe("winning numbers", () => {
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

    it("can read multiple winning numbers from line", () => {
      const line = readLine("Card 1: 1 2 | 2");

      expect(line.winningNumbers).toEqual([1, 2]);
    });
  });

  describe("played numbers", () => {
    it("can read played numbers", () => {
      const line = readLine("Card 1: 1 | 2");

      expect(line.playedNumbers).toEqual([2]);
    });

    it("can read different played numbers", () => {
      const line = readLine("Card 1: 1 | 3");

      expect(line.playedNumbers).toEqual([3]);
    });

    it("can read 2 digits played numbers", () => {
      const line = readLine("Card 1: 1 | 33");

      expect(line.playedNumbers).toEqual([33]);
    });

    it("can read multiple played numbers", () => {
      const line = readLine("Card 1: 1 | 1 2");

      expect(line.playedNumbers).toEqual([1, 2]);
    });
  });
});
