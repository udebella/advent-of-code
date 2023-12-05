import { describe, expect, it } from "../../deps.ts";

type Card = { number: number; winningNumbers: number };
const wonCards = (cards: Card[], bonuses = 0): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [firstCard, ...rest] = cards;
  const hasBonuses = bonuses !== 0;
  return (hasBonuses ? 1 : 0) + firstCard.number +
    wonCards(rest, firstCard.winningNumbers);
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

  it("does not overflow winning cards", () => {
    const cards = [
      { number: 1, winningNumbers: 2 },
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(3);
  });
});
