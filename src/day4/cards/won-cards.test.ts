import { describe, expect, it } from "../../deps.ts";
import { sum } from "../../day3/sum.ts";

const wonCards = (cards: { number: number; winningNumbers: number }[]) => {
  return cards.map(({ number }) => number).reduce(sum);
};

describe("Won cards", () => {
  it("have only one card when one card does not have winning numbers", () => {
    const cards = [
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1);
  });

  it("have two card when none have winning numbers", () => {
    const cards = [
      { number: 1, winningNumbers: 0 },
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(2);
  });
});
