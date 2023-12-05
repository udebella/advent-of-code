import { describe, expect, it } from "../../deps.ts";
import { sum } from "../../day3/sum.ts";

type Card = { number: number; winningNumbers: number };
const wonCards = (cards: Card[]) => {
  return cards.map(({ number, winningNumbers }) => number + winningNumbers)
    .reduce(sum);
};

describe("Won cards", () => {
  it("have only one card when one card does not have winning numbers", () => {
    const cards = [
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1);
  });

  it("have two cards when none have winning numbers", () => {
    const cards = [
      { number: 1, winningNumbers: 0 },
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(2);
  });

  it("have three cards when the first card have one winning numbers", () => {
    const cards = [
      { number: 1, winningNumbers: 1 },
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(3);
  });
});
